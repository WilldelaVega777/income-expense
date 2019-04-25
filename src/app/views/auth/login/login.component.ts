
//----------------------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------------------
import { Component }                    from '@angular/core';
import { OnInit }                       from '@angular/core';
import { OnDestroy }                    from '@angular/core';

import { AuthService }                  from './../../../services/auth.service';
import { Router }                       from '@angular/router';

import SweetAlert                       from 'sweetalert2';


//----------------------------------------------------------------------------
// Component Configuration Section
//----------------------------------------------------------------------------
@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
//----------------------------------------------------------------------------
// Component Class Section
//----------------------------------------------------------------------------
export class LoginComponent implements OnInit, OnDestroy
{
    //------------------------------------------------------------------------
    // Public Fields Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Private Fields Section
    //------------------------------------------------------------------------
    private authService                         : AuthService;
    private routerService                       : Router;


    //------------------------------------------------------------------------
    // Public Properties Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Constructor Method Section
    //------------------------------------------------------------------------
    constructor(as: AuthService, rt: Router)
    {
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
    loginForm_submit(loginData: {email: string, password: string})
    {
        this.authService.login(loginData.email, loginData.password)
        .then(() => {
            this.routerService.navigate(['/']);
        })
        .catch((error: any) => {
            console.error(error);
            SweetAlert.fire('Error en Login', error.message, 'error');
        });
    }

    //------------------------------------------------------------------------
    // Public Methods Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Private Methods Section
    //------------------------------------------------------------------------

}
