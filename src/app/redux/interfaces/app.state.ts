
//--------------------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------------------
import { IUIState }             from './ui.state';
import { IAuthState }           from './auth.state';
//import { IIncomeOutcomeState }  from './income-outcome.state';

//--------------------------------------------------------------------------
// Interface Definition Section
//--------------------------------------------------------------------------
export interface IAppState
{
    ui              : IUIState;
    auth            : IAuthState;
    //incomeOutcome   : IIncomeOutcomeState;
}
