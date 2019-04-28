//-------------------------------------------------------------------------------------
// Imports Section:
//-------------------------------------------------------------------------------------
import { ActionReducerMap }         from '@ngrx/store';
import { IAppState }                from '../interfaces/app.state';
import { uiReducer }                from './ui.reducer';
import { authReducer }              from './auth.reducer';
import { incomeOutcomeReducer }     from './income-outcome.reducer';

//-------------------------------------------------------------------------------------
// Reducer Function Definition Section:
//-------------------------------------------------------------------------------------
export const appReducers: ActionReducerMap<IAppState> =
{
    ui              : uiReducer,
    auth            : authReducer,
    incomeOutcome   : incomeOutcomeReducer
};
