//----------------------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------------------
import { Component }                    from '@angular/core';
import { OnInit }                       from '@angular/core';
import { OnDestroy }                    from '@angular/core';

import { AuthService }                  from 'src/app/services/auth.service';
import { Router }                       from '@angular/router';
import SweetAlert                       from 'sweetalert2';


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
    // Public Fields Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Private Fields Section
    //------------------------------------------------------------------------
    private authService                             : AuthService;
    private routerService                           : Router;

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
    cmdLogout_click()
    {
        this.authService.logout()
        .then(() => {
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
