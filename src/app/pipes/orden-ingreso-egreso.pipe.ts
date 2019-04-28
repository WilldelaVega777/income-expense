//----------------------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------------------
import { Pipe, PipeTransform }    from '@angular/core';
import { IncomeOutcome }          from './../models/income-outcome.model';


//----------------------------------------------------------------------------
// Pipe Configuration Section
//----------------------------------------------------------------------------
@Pipe({ name: 'ordenIngresoEgreso' })

//----------------------------------------------------------------------------
// Pipe Class and Methods
//----------------------------------------------------------------------------
export class OrdenIngresoEgresoPipe implements PipeTransform
{
    //------------------------------------------------------------------------
    // Transform Method
    //------------------------------------------------------------------------
    public transform(items: IncomeOutcome[]): IncomeOutcome[]
    {
        return items.sort((a: IncomeOutcome, b: IncomeOutcome) => {
            if (a.type === 'ingreso')
            {
                return -1;
            }
            else
            {
                return 1;
            }
        });
    }
}
