//----------------------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------------------
import { Component }                    from '@angular/core';
import { OnInit }                       from '@angular/core';
import { OnDestroy }                    from '@angular/core';

import { AuthService }                  from 'src/app/services/auth.service';
import SweetAlert                       from 'sweetalert2';

import { Router }                       from '@angular/router';

import { IUser }                        from 'src/app/models/user.model';

//----------------------------------------------------------------------------
// Component Configuration Section
//----------------------------------------------------------------------------
@Component({
    selector: 'register',
    templateUrl: 'register.component.html'
})
//----------------------------------------------------------------------------
// Component Class Section
//----------------------------------------------------------------------------
export class RegisterComponent implements OnInit, OnDestroy
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
    userForm_onSubmit(formData : IUser)
    {
        console.log(formData);
        this.authService.crearUsuario(
            formData.nombre,
            formData.email,
            formData.password
        )
        .then(() => {
            this.routerService.navigate(['/']);
        })
        .catch((error: any) => {
            console.error(error);
            SweetAlert.fire('El usuario ya existe', error.message, 'error')
        });
    }

    //------------------------------------------------------------------------
    // Public Methods Section
    //------------------------------------------------------------------------


    //------------------------------------------------------------------------
    // Private Methods Section
    //------------------------------------------------------------------------


}
