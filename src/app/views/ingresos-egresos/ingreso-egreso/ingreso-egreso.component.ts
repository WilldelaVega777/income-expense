//----------------------------------------------------------------------------
// Imports Section (Angular)
//----------------------------------------------------------------------------
import { Component }                    from '@angular/core';
import { OnInit }                       from '@angular/core';
import { OnDestroy }                    from '@angular/core';
import { FormGroup }                    from '@angular/forms';
import { FormControl }                  from '@angular/forms';
import { Validators }                   from '@angular/forms';

//----------------------------------------------------------------------------
// Imports Section (Redux/RxJs)
//----------------------------------------------------------------------------
import { Store }                        from '@ngrx/store';
import * as UIActions                   from 'src/app/redux/actions/ui.actions';
import { IAppState }                    from 'src/app/redux/interfaces/app.state';
import { Subscription }                 from 'rxjs';
import { IncomeOutcome }                from '../../../models/income-outcome.model';
import { IncomeOutcomeService }         from 'src/app/services/income-outcome.service';

//----------------------------------------------------------------------------
// Imports Section (External Components)
//----------------------------------------------------------------------------
import SweetAlert                       from 'sweetalert2';


//----------------------------------------------------------------------------
// Component Configuration Section
//----------------------------------------------------------------------------
@Component({
    selector    : 'ingreso-egreso',
    templateUrl : 'ingreso-egreso.component.html'
})
//----------------------------------------------------------------------------
// Component Class Section
//----------------------------------------------------------------------------
export class IngresoEgresoComponent implements OnInit, OnDestroy
{
    //------------------------------------------------------------------------
    // Public Fields Section
    //------------------------------------------------------------------------
    public frmIncomeOutcome                     : FormGroup;
    public type                                 : string;
    public isLoading                            : boolean;


    //------------------------------------------------------------------------
    // Private Fields Section
    //------------------------------------------------------------------------
    private store                               : Store<IAppState>;
    private incomeOutcomeService                : IncomeOutcomeService;
    private storeUI$                            : Subscription;


    //------------------------------------------------------------------------
    // Constructor Method Section
    //------------------------------------------------------------------------
    constructor(st: Store<IAppState>, ies: IncomeOutcomeService)
    {
        // Services
        this.store                  = st;
        this.incomeOutcomeService   = ies;

        // Public Fields
        this.type                   = 'ingreso';
        this.isLoading              = false;
    }


    //------------------------------------------------------------------------
    // Component Lifecycle Eventhandler Methods Section
    //------------------------------------------------------------------------
    ngOnInit()
    {
        this.frmIncomeOutcome = new FormGroup({
            'description'   : new FormControl('', Validators.required),
            'amount'        : new FormControl('', Validators.min(1)),
        });

        this.storeUI$ = this.store
        .select(state => state.ui.isLoading)
        .subscribe((isLoading) => {
            this.isLoading = isLoading;
        },
        error => console.error(error));
    }
    //------------------------------------------------------------------------
    ngOnDestroy()
    {
        this.storeUI$.unsubscribe();
    }

    //------------------------------------------------------------------------
    // Eventhandler Methods Section
    //------------------------------------------------------------------------
    frmIncomeOutcome_submit(formValues: {description: string, amount: number})
    {
        this.store.dispatch(new UIActions.ActivateLoadingAction());

        const incomeOutcome: IncomeOutcome = new IncomeOutcome({
            ...formValues,
            type: this.type
        });


        //this.store.dispatch(new IngresoEgresoAction(ingresoEgreso));

        this.incomeOutcomeService.createIncomeOutcome(incomeOutcome)
        .then(() => {
           this.store.dispatch(new UIActions.DeactivateLoadingAction());
           SweetAlert.fire(incomeOutcome.type.toUpperCase(), 'Grabado correctamente.', 'success');
        })
        .catch(error => console.error(error));

        this.frmIncomeOutcome.reset({
            amount: 0
        });
    }

    //------------------------------------------------------------------------
    // Public Methods Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Private Methods Section
    //------------------------------------------------------------------------


}
