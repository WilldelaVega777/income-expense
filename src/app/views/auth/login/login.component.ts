//----------------------------------------------------------------------------
// Imports Section (Angular)
//----------------------------------------------------------------------------
import { Component }                    from '@angular/core';
import { OnInit }                       from '@angular/core';
import { OnDestroy }                    from '@angular/core';
import { Router }                       from '@angular/router';

//----------------------------------------------------------------------------
// Imports Section (App Services & Interfaces)
//----------------------------------------------------------------------------
import { AuthService }                  from 'src/app/services/auth.service';
import { IUser }                        from 'src/app/models/user.model';

//----------------------------------------------------------------------------
// Imports Section (Redux/RxJs)
//----------------------------------------------------------------------------
import { Store }                        from '@ngrx/store';
import * as UIActions                   from 'src/app/redux/actions/ui.actions';
import { IAppState }                    from 'src/app/redux/interfaces/app.state';
import { Subscription }                 from 'rxjs';

//----------------------------------------------------------------------------
// Imports Section (External Components)
//----------------------------------------------------------------------------
import SweetAlert                       from 'sweetalert2';


//----------------------------------------------------------------------------
// Component Configuration Section
//----------------------------------------------------------------------------
@Component({
    selector    : 'login',
    templateUrl : 'login.component.html'
})
//----------------------------------------------------------------------------
// Component Class Section
//----------------------------------------------------------------------------
export class LoginComponent implements OnInit, OnDestroy
{
    //------------------------------------------------------------------------
    // Public Fields Section
    //------------------------------------------------------------------------
    public isLoading                            : boolean;

    //------------------------------------------------------------------------
    // Private Fields Section
    //------------------------------------------------------------------------
    private store                               : Store<IAppState>;
    private authService                         : AuthService;
    private routerService                       : Router;

    private store$                              : Subscription;


    //------------------------------------------------------------------------
    // Constructor Method Section
    //------------------------------------------------------------------------
    constructor(st: Store<IAppState>, as: AuthService, rt: Router)
    {
        this.store          = st;
        this.authService    = as;
        this.routerService  = rt;

        this.isLoading      = false;
    }


    //------------------------------------------------------------------------
    // Component Lifecycle Eventhandler Methods Section
    //------------------------------------------------------------------------
    ngOnInit()
    {
        this.store$ = this.store
        .select(state => state.ui.isLoading)
        .subscribe((isLoading) => {
            this.isLoading = isLoading;
        });
    }
    //------------------------------------------------------------------------
    ngOnDestroy()
    {
        this.store$.unsubscribe();
    }

    //------------------------------------------------------------------------
    // Eventhandler Methods Section
    //------------------------------------------------------------------------
    loginForm_submit(loginData: {email: string, password: string})
    {
        this.store.dispatch(new UIActions.ActivateLoadingAction());

        this.authService.login(loginData.email, loginData.password)
        .then(() => {
            this.store.dispatch(new UIActions.DeactivateLoadingAction());
            this.routerService.navigate(['/']);
        })
        .catch((error: any) => {
            this.store.dispatch(new UIActions.DeactivateLoadingAction());
            SweetAlert.fire('Error en Login', error.message, 'error');
            console.error(error);
        });
    }

    //------------------------------------------------------------------------
    // Public Methods Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Private Methods Section
    //------------------------------------------------------------------------

}
