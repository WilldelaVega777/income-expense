//----------------------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------------------
import { Component }                    from '@angular/core';
import { OnInit }                       from '@angular/core';
import { OnDestroy }                    from '@angular/core';
import { Input }                        from '@angular/core';

import { AuthService }                  from 'src/app/services/auth.service';
import { Router }                       from '@angular/router';
import SweetAlert                       from 'sweetalert2';

//----------------------------------------------------------------------------
// Imports Section (Redux / App)
//----------------------------------------------------------------------------
import { Store }                        from '@ngrx/store';
import { IAppState }                    from 'src/app/redux/interfaces/app.state';
import * as AuthActions                 from 'src/app/redux/actions/auth.actions';
import * as IOActions                   from 'src/app/redux/actions/income-outcome.actions';
import { IUser }                        from './../../../models/user.model';


//----------------------------------------------------------------------------
// Component Configuration Section
//----------------------------------------------------------------------------
@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html'
})
//----------------------------------------------------------------------------
// Component Class Section
//----------------------------------------------------------------------------
export class SidebarComponent implements OnInit, OnDestroy
{
    //------------------------------------------------------------------------
    // Input Fields Section
    //------------------------------------------------------------------------
    @Input() user                                   : IUser;


    //------------------------------------------------------------------------
    // Private Fields Section
    //------------------------------------------------------------------------
    private store                                   : Store<IAppState>;
    private authService                             : AuthService;
    private routerService                           : Router;


    //------------------------------------------------------------------------
    // Constructor Method Section
    //------------------------------------------------------------------------
    constructor(st: Store<IAppState>, as: AuthService, rt: Router)
    {
        this.store = st;
        this.authService    = as;
        this.routerService  = rt;
    }


    //------------------------------------------------------------------------
    // Component Lifecycle Eventhandler Methods Section
    //------------------------------------------------------------------------
    ngOnInit()
    {

    }
    //------------------------------------------------------------------------
    ngOnDestroy()
    {

    }

    //------------------------------------------------------------------------
    // Eventhandler Methods Section
    //------------------------------------------------------------------------
    cmdLogout_click()
    {
        this.authService.logout()
        .then(() => {
            this.store.dispatch(new IOActions.UnsetItemsAction());
            this.store.dispatch(new AuthActions.UnsetUserAction(this.user));
            this.routerService.navigate(['login']);
        })
        .catch(error => {
            console.error(error.message);
            SweetAlert.fire('Error en el proceso de salida', error.message, 'error');
        });
    }


    //------------------------------------------------------------------------
    // Public Methods Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Private Methods Section
    //------------------------------------------------------------------------


}
