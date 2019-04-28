//----------------------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------------------
import { Component }                    from '@angular/core';
import { OnInit }                       from '@angular/core';
import { OnDestroy }                    from '@angular/core';

//----------------------------------------------------------------------------
// Imports Section (Redux/RxJs/App)
//----------------------------------------------------------------------------
import { Store }                        from '@ngrx/store';
import * as UIActions                   from 'src/app/redux/actions/ui.actions';
import { IAppState }                    from 'src/app/redux/interfaces/app.state';
import { Subscription }                 from 'rxjs';
import { IncomeOutcome }                from '../../../models/income-outcome.model';
import { IncomeOutcomeService }         from 'src/app/services/income-outcome.service';
import { map }                          from 'rxjs/operators';

//----------------------------------------------------------------------------
// Imports Section (External Components)
//----------------------------------------------------------------------------
import SweetAlert                       from 'sweetalert2';


//----------------------------------------------------------------------------
// Component Configuration Section
//----------------------------------------------------------------------------
@Component({
    selector: 'detalle',
    templateUrl: 'detalle.component.html'
})
//----------------------------------------------------------------------------
// Component Class Section
//----------------------------------------------------------------------------
export class DetalleComponent implements OnInit, OnDestroy
{
    //------------------------------------------------------------------------
    // Public Fields Section
    //------------------------------------------------------------------------
    public incomeOutcomeItems                   : IncomeOutcome[];


    //------------------------------------------------------------------------
    // Private Fields Section
    //------------------------------------------------------------------------
    private store                               : Store<IAppState>;
    private ingresoEgreso$                      : Subscription;
    private incomeOutcomeService                : IncomeOutcomeService;


    //------------------------------------------------------------------------
    // Public Properties Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Constructor Method Section
    //------------------------------------------------------------------------
    constructor(st: Store<IAppState>, ias: IncomeOutcomeService)
    {
        this.store = st;
        this.incomeOutcomeService = ias;
        this.incomeOutcomeItems = [];
    }


    //------------------------------------------------------------------------
    // Component Lifecycle Eventhandler Methods Section
    //------------------------------------------------------------------------
    ngOnInit()
    {
        this.ingresoEgreso$ = this.store
        .pipe(
            map(state => state.incomeOutcome.items)
        )
        .subscribe((items: IncomeOutcome[]) => {
            this.incomeOutcomeItems = items;
        });

    }
    //------------------------------------------------------------------------
    ngOnDestroy()
    {
        this.ingresoEgreso$.unsubscribe();
    }

    //------------------------------------------------------------------------
    // Eventhandler Methods Section
    //------------------------------------------------------------------------
    cmdEliminar_click(incomeOutcome: IncomeOutcome)
    {
        this.incomeOutcomeService.removeIncomeOutcome(incomeOutcome.uid)
        .then(() => {
            console.log(`Ingreso/Egreso Eliminado: ${incomeOutcome.uid}`);
            SweetAlert.fire('Eliminado', incomeOutcome.description, 'success');
        })
        .catch(error => console.error(error));
    }


    //------------------------------------------------------------------------
    // Public Methods Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Private Methods Section
    //------------------------------------------------------------------------


}
