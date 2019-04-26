//-------------------------------------------------------------------------------------
// Imports Section:
//-------------------------------------------------------------------------------------
import { IAuthState }                from '../interfaces/auth.state';
import * as StateActions             from '../actions/auth.actions';

//-------------------------------------------------------------------------------------
// Reducer Function Definition Section:
//-------------------------------------------------------------------------------------
export function authReducer(
    state: IAuthState,
    action: StateActions.AvailableActions
) : IAuthState
{
      switch ( action.type )
      {
            case StateActions.INIT:
                  return {
                      user : {
                        nombre          : '',
                        email           : ''
                      }
                  };

            case StateActions.USER_SET:
                  return {
                      user : {
                        ...action.user
                      }
                  };

            default:
                  return state;
                  break;
      }
}
