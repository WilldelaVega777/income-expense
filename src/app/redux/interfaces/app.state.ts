//--------------------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------------------
import { IUIState }             from './ui.state';
import { IAuthState }           from './auth.state';

//--------------------------------------------------------------------------
// Interface Definition Section
//--------------------------------------------------------------------------
export interface IAppState
{
    ui      : IUIState;
    auth    : IAuthState;
}
