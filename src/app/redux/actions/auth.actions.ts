//----------------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------------
import { Action }                       from '@ngrx/store';
import { IUser }                        from 'src/app/models/user.model';

//----------------------------------------------------------------------
// Action Constants Section
//----------------------------------------------------------------------
export const INIT        = '@ngrx/store/init';
export const USER_SET    = '[Auth] Set User';


//----------------------------------------------------------------------
// Action Classes Section
//----------------------------------------------------------------------
export class InitAction implements Action
{
      readonly type = INIT;
}
//----------------------------------------------------------------------
export class SetUserAction implements Action
{
    readonly type = USER_SET;

    public user: IUser;

    constructor(pUser: IUser)
    {
        this.user = pUser;
    }
}
//----------------------------------------------------------------------
// Valid Types (Union) Section
//----------------------------------------------------------------------
export type AvailableActions =  InitAction | SetUserAction;
