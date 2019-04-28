//----------------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------------
import { Action }            from '@ngrx/store';
import { IncomeOutcome }     from 'src/app/models/income-outcome.model';


//----------------------------------------------------------------------
// Action Constants Section
//----------------------------------------------------------------------
export const INIT        = '@ngrx/store/init';
export const ITEMS_SET   = '[Income Outcome] Set Items';
export const ITEMS_UNSET = '[Income Outcome] Unset Items';


//----------------------------------------------------------------------
// Action Classes Section
//----------------------------------------------------------------------
export class InitAction implements Action
{
    // Action Interface Implementation
    readonly type = INIT;
}
//----------------------------------------------------------------------
export class SetItemsAction implements Action
{
    // Action Interface Implementation:
    readonly type = ITEMS_SET;

    // Public Fields Section:
    public items: IncomeOutcome[];

    // Constructor Method Section:
    constructor(pItems: IncomeOutcome[])
    {
        this.items = pItems;
    }
}
//----------------------------------------------------------------------
export class UnsetItemsAction implements Action
{
    // Action Interface Implementation:
    readonly type = ITEMS_UNSET;
}
//----------------------------------------------------------------------
// Valid Types (Union) Section
//----------------------------------------------------------------------
export type AvailableActions =
    InitAction | SetItemsAction | UnsetItemsAction;
