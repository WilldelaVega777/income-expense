//----------------------------------------------------------------------------
// Imports Section (Angular)
//----------------------------------------------------------------------------
import { Component }                    from '@angular/core';
import { OnInit }                       from '@angular/core';
import { OnDestroy }                    from '@angular/core';

//----------------------------------------------------------------------------
// Imports Section (RxJS)
//----------------------------------------------------------------------------
import { map }                          from 'rxjs/operators';
import { filter }                       from 'rxjs/operators';

//----------------------------------------------------------------------------
// Imports Section (Firebase)
//----------------------------------------------------------------------------
import { DocumentChangeAction } from 'angularfire2/firestore';

//----------------------------------------------------------------------------
// Imports Section (Redux / App)
//----------------------------------------------------------------------------
import { Store }                        from '@ngrx/store';
import { IAppState }                    from 'src/app/redux/interfaces/app.state';
import { IncomeOutcomeService }         from 'src/app/services/income-outcome.service';
import { IncomeOutcome }                from 'src/app/models/income-outcome.model';
import { IUser }                        from './../../models/user.model';
import { Subscription }                 from 'rxjs';
import * as IOActions                   from 'src/app/redux/actions/income-outcome.actions';


//----------------------------------------------------------------------------
// Component Configuration Section
//----------------------------------------------------------------------------
@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
//----------------------------------------------------------------------------
// Component Class Section
//----------------------------------------------------------------------------
export class DashboardComponent implements OnInit, OnDestroy
{
    //------------------------------------------------------------------------
    // Public Fields Section
    //------------------------------------------------------------------------
    public user                             : IUser;


    //------------------------------------------------------------------------
    // Private Fields Section
    //------------------------------------------------------------------------
    private store                           : Store<IAppState>;
    private incomeOutcomeService            : IncomeOutcomeService;

    private auth$                           : Subscription;
    private items$                          : Subscription;


    //------------------------------------------------------------------------
    // Constructor Method Section
    //------------------------------------------------------------------------
    constructor(st: Store<IAppState>, ios: IncomeOutcomeService)
    {
        this.store = st;
        this.incomeOutcomeService = ios;
        this.user = {
            nombre : '',
            email  : '',
            picture: 'face2.jpg'
        }
    }


    //------------------------------------------------------------------------
    // Component Lifecycle Eventhandler Methods Section
    //------------------------------------------------------------------------
    ngOnInit()
    {
        this.auth$ = this.store
        .select(state => state.auth.user)
        .subscribe((user: IUser) => {
            if (user && user.uid)
            {
                this.user = user;
                this.items$ = this.incomeOutcomeService.initIncomeOutcomeListener().snapshotChanges()
                .pipe(
                    map((snapshotChange: DocumentChangeAction<IncomeOutcome>[]) => {
                        return snapshotChange.map((docAction: DocumentChangeAction<IncomeOutcome>) => {
                            return new IncomeOutcome({
                                ...docAction.payload.doc.data(),
                                uid: docAction.payload.doc.id
                            })
                        });
                    })
                )
                .subscribe((incomeOutcomeItems: IncomeOutcome[]) => {
                    this.store.dispatch(new IOActions.SetItemsAction(incomeOutcomeItems));
                });
            }
        }, error => console.error(error));
    }
    //------------------------------------------------------------------------
    ngOnDestroy()
    {
        this.auth$.unsubscribe();
        this.items$.unsubscribe();
    }

    //------------------------------------------------------------------------
    // Eventhandler Methods Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Public Methods Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Private Methods Section
    //------------------------------------------------------------------------


}
