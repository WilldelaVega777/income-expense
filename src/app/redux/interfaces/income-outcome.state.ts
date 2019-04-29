//--------------------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------------------
import { IncomeOutcome }        from 'src/app/models/income-outcome.model';
import { IAppState }            from './app.state';


//--------------------------------------------------------------------------
// Interface Definition Section
//--------------------------------------------------------------------------
export interface IIncomeOutcomeState
{
    items: IncomeOutcome[];
}

//--------------------------------------------------------------------------
// AppState Override Section
//--------------------------------------------------------------------------
export interface IAppState extends IAppState
{
    incomeOutcome   : IIncomeOutcomeState;
}
