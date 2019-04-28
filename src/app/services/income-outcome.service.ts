//----------------------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------------------
import { Injectable }                       from '@angular/core';
import { AngularFireAuth }                  from 'angularfire2/auth';
import { AngularFirestore }                 from 'angularfire2/firestore';
import { AngularFirestoreCollection }       from 'angularfire2/firestore';
import { Observable }                       from 'rxjs';
import { Subscription }                     from 'rxjs/';
import { map }                              from 'rxjs/operators';

import { IncomeOutcome }                    from 'src/app/models/income-outcome.model';
import { AuthService }                      from 'src/app/services/auth.service';


//----------------------------------------------------------------------------
// Service Configuration Section
//----------------------------------------------------------------------------
@Injectable({
  providedIn: 'root'
})
//----------------------------------------------------------------------------
// Service Class Section
//----------------------------------------------------------------------------
export class IncomeOutcomeService
{
    //------------------------------------------------------------------------
    // Private Properties Section
    //------------------------------------------------------------------------
    private databaseService                         : AngularFirestore;
    private authService                             : AuthService;

    //------------------------------------------------------------------------
    // Constructor Method Section
    //------------------------------------------------------------------------
    constructor(afs: AngularFirestore, as: AuthService)
    {
        this.databaseService = afs;
        this.authService     = as;
    }

    //------------------------------------------------------------------------
    // Public Methods Section
    //------------------------------------------------------------------------
    public createIncomeOutcome(
        incomeOutcome: IncomeOutcome
    ): Promise<firebase.firestore.DocumentReference>
    {
        const path = `${this.authService.getCurrentUser().uid}/ingresos-egresos`;
        return this.databaseService.doc(path)
                .collection('items').add({...incomeOutcome});
    }
    //------------------------------------------------------------------------
    public initIncomeOutcomeListener() : AngularFirestoreCollection<IncomeOutcome>
    {
        const uid: string = this.authService.getCurrentUser().uid;
        return this.incomeOutcomeItems(uid);
    }
    //------------------------------------------------------------------------
    public removeIncomeOutcome(incomeOutcomeId: string): Promise<void>
    {
        const uid: string = this.authService.getCurrentUser().uid;
        const path = `${uid}/ingresos-egresos/items/${incomeOutcomeId}`;
        return this.databaseService.doc(path).delete();
    }


    //------------------------------------------------------------------------
    // Private Methods Section
    //------------------------------------------------------------------------
    private incomeOutcomeItems(uid: string): AngularFirestoreCollection<IncomeOutcome>
    {
        const path: string = `${uid}/ingresos-egresos/items`;
        return this.databaseService.collection(path);
    }
}
