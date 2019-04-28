//-------------------------------------------------------------------------------------
// Imports Section:
//-------------------------------------------------------------------------------------
import { IIncomeOutcomeState }              from '../interfaces/income-outcome.state';
import * as StateActions                    from '../actions/income-outcome.actions';
import { IncomeOutcome }                    from 'src/app/models/income-outcome.model';

//-------------------------------------------------------------------------------------
// Reducer Function Definition Section:
//-------------------------------------------------------------------------------------
export function incomeOutcomeReducer(
    state: IIncomeOutcomeState,
    action: StateActions.AvailableActions
) : IIncomeOutcomeState
{
      switch ( action.type )
      {
            case StateActions.INIT:
                return {
                    items: []
                };

            case StateActions.ITEMS_SET:
                return {
                    items: [
                        ...action.items.map( item => {
                            return {
                                ...item
                            };
                        })
                    ]
                };

            case StateActions.ITEMS_UNSET:
                return {
                    items: []
                };

            default:
                return state;
      }
}
