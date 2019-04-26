//----------------------------------------------------------------------------
// Imports Section (Angular)
//----------------------------------------------------------------------------
import { Component }                    from '@angular/core';
import { OnInit }                       from '@angular/core';
import { AuthService  }                 from 'src/app/services/auth.service';

//----------------------------------------------------------------------------
// Imports Section (Redux / App)
//----------------------------------------------------------------------------
import { IUser }                        from 'src/app/models/user.model';

import { Store }                        from '@ngrx/store';
import * as AuthActions                 from 'src/app/redux/actions/auth.actions';
import { IAppState }                    from 'src/app/redux/interfaces/app.state';


//----------------------------------------------------------------------------
// Component Configuration Section
//----------------------------------------------------------------------------
@Component({
    selector    : 'app-root',
    templateUrl : './app.component.html',
    styleUrls   : ['./app.component.css']
})


//----------------------------------------------------------------------------
// Component Class Section
//----------------------------------------------------------------------------
export class AppComponent implements OnInit
{
    //------------------------------------------------------------------------
    // Public Fields Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Private Fields Section
    //------------------------------------------------------------------------
    private store                                   : Store<IAppState>;
    private authService                             : AuthService;


    //------------------------------------------------------------------------
    // Constructor Method Section
    //------------------------------------------------------------------------
    constructor(st: Store<IAppState>, as: AuthService)
    {
        this.store          = st;
        this.authService    = as;
    }


    //------------------------------------------------------------------------
    // Lifecycle Eventhandler Methods Section
    //------------------------------------------------------------------------
    ngOnInit()
    {
        this.authService.initAuthListener()
        .subscribe((user: IUser) => {
            this.store.dispatch(new AuthActions.SetUserAction(user));
        },
        (error: any) => console.error(error.message));
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
