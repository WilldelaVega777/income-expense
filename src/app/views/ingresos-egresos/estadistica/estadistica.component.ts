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
import { IAppState }                    from 'src/app/redux/interfaces/income-outcome.state';
import { Subscription }                 from 'rxjs';
import { map }                          from 'rxjs/operators';
import { filter }                       from 'rxjs/operators';

//----------------------------------------------------------------------------
// Imports Section (Charts)
//----------------------------------------------------------------------------
import { ChartType }                    from 'chart.js';
import { MultiDataSet }                 from 'ng2-charts';
import { Label }                        from 'ng2-charts';

//----------------------------------------------------------------------------
// Imports Section (App Models & Services)
//----------------------------------------------------------------------------
import { IncomeOutcome }                from '../../../models/income-outcome.model';
import { IncomeOutcomeService }         from 'src/app/services/income-outcome.service';

//----------------------------------------------------------------------------
// Component Configuration Section
//----------------------------------------------------------------------------
@Component({
    selector: 'estadistica',
    templateUrl: 'estadistica.component.html'
})
//----------------------------------------------------------------------------
// Component Class Section
//----------------------------------------------------------------------------
export class EstadisticaComponent implements OnInit, OnDestroy
{
    //------------------------------------------------------------------------
    // Public Fields Section
    //------------------------------------------------------------------------
    public income                           : number;
    public outcome                          : number;

    public incomeCount                      : number;
    public outcomeCount                     : number;

    public incomeOutcomeItems               : IncomeOutcome[];

    public doughnutChartLabels              : Label[];
    public doughnutChartData                : MultiDataSet;


    //------------------------------------------------------------------------
    // Private Fields Section
    //------------------------------------------------------------------------
    private store                           : Store<IAppState>;
    private incomeOutcome$                  : Subscription;


    //------------------------------------------------------------------------
    // Constructor Method Section
    //------------------------------------------------------------------------
    constructor(st: Store<IAppState>)
    {
        this.store                  = st;
        this.incomeOutcomeItems     = [];

        this.doughnutChartLabels    = ['Ingresos', 'Egresos'];
        this.doughnutChartData      = [[this.income, this.outcome]];
    }


    //------------------------------------------------------------------------
    // Component Lifecycle Eventhandler Methods Section
    //------------------------------------------------------------------------
    ngOnInit()
    {
        // Should filter when store node is coming from lazy loading...
        this.incomeOutcome$ = this.store
        .pipe(
            filter(state => state.incomeOutcome != null),
            map(state => state.incomeOutcome.items)
        )
        .subscribe((items: IncomeOutcome[]) => {
            this.incomeOutcomeItems = items;
            this.summarizeIncomeOutcome(items);
        });
    }
    //------------------------------------------------------------------------
    ngOnDestroy()
    {
        this.incomeOutcome$.unsubscribe();
    }

    //------------------------------------------------------------------------
    // Eventhandler Methods Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Public Methods Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Private Methods Section
    //------------------------------------------------------------------------
    private summarizeIncomeOutcome(incomeOutcomeItems : IncomeOutcome[])
    {
        this.income         = 0;
        this.outcome        = 0;

        this.incomeCount    = 0;
        this.outcomeCount   = 0;

        incomeOutcomeItems.forEach(incomeOutcomeItem => {
            if (incomeOutcomeItem.type === 'ingreso')
            {
                this.incomeCount++;
                this.income += incomeOutcomeItem.amount;
            }
            else
            {
                this.outcomeCount++;
                this.outcome += incomeOutcomeItem.amount;
            }
        });

        this.doughnutChartData      = [[this.income, this.outcome]];
    }


}
