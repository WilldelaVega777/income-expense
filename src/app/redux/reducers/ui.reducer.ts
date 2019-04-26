//-------------------------------------------------------------------------------------
// Imports Section:
//-------------------------------------------------------------------------------------
import { IUIState }                     from '../interfaces/ui.state';
import * as UIActions                   from '../actions/ui.actions';

//-------------------------------------------------------------------------------------
// Reducer Function Definition Section:
//-------------------------------------------------------------------------------------
export function uiReducer(
    state: IUIState,
    action: UIActions.AvailableActions
) : IUIState
{
      switch ( action.type )
      {
            case UIActions.INIT:
                return {
                    isLoading : false
                };

            case UIActions.LOADING_ACTIVATE:
                return {
                    isLoading : true
                };

            case UIActions.LOADING_DEACTIVATE:
                return {
                    isLoading : false
                };

            default:
                return state;
      }
}
