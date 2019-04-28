//-------------------------------------------------------------------------------
// Class Implementation Section
//-------------------------------------------------------------------------------
export class IncomeOutcome
{
    //---------------------------------------------------------------------------
    // Public Properties Section
    //---------------------------------------------------------------------------
    public description : string;
    public amount      : number;
    public type        : string;
    public uid         : string;

    //---------------------------------------------------------------------------
    // Constructor Method Section
    //---------------------------------------------------------------------------
    constructor(obj: any)
    {
        this.description    = obj && obj.description    || null;
        this.amount         = obj && obj.amount         || null;
        this.type           = obj && obj.type           || null;
        this.uid            = obj && obj.uid            || null;
    }
}
