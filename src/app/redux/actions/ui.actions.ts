//----------------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------------
import { Action }                       from '@ngrx/store';

//----------------------------------------------------------------------
// Action Constants Section
//----------------------------------------------------------------------
export const INIT                       = '@ngrx/store/init';
export const LOADING_ACTIVATE           = '[UI Loading] Cargando...';
export const LOADING_DEACTIVATE         = '[UI Loading] Fin de carga...';


//----------------------------------------------------------------------
// Action Classes Section
//----------------------------------------------------------------------
export class InitAction implements Action
{
    readonly type = INIT;
}
//----------------------------------------------------------------------
export class ActivateLoadingAction implements Action
{
    readonly type = LOADING_ACTIVATE;
}
//----------------------------------------------------------------------
export class DeactivateLoadingAction implements Action
{
    readonly type = LOADING_DEACTIVATE;
}
//----------------------------------------------------------------------
// Valid Types (Union) Section
//----------------------------------------------------------------------
export type AvailableActions =
    InitAction | ActivateLoadingAction | DeactivateLoadingAction;
