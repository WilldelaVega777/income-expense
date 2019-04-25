//----------------------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------------------
import { Injectable }                   from '@angular/core';
import { CanActivate }                  from '@angular/router';
import { Router }                       from '@angular/router';
import { AuthService }                  from 'src/app/services/auth.service';
import { Observable }                   from 'rxjs';
import { from }                         from 'rxjs';

//----------------------------------------------------------------------------
// Service Configuration Section
//----------------------------------------------------------------------------
@Injectable({
  providedIn: 'root'
})
//----------------------------------------------------------------------------
// Service Class Section
//----------------------------------------------------------------------------
export class AuthGuardService implements CanActivate
{
    //------------------------------------------------------------------------
    // Private Properties Section
    //------------------------------------------------------------------------
    private routerService                   : Router;
    private authService                     : AuthService;

    //------------------------------------------------------------------------
    // Constructor Method Section
    //------------------------------------------------------------------------
    constructor(rt: Router, as: AuthService)
    {
        this.routerService  = rt;
        this.authService    = as;
    }


    //------------------------------------------------------------------------
    // CanActivate Interface Implementation Section
    //------------------------------------------------------------------------
    canActivate() : Observable<boolean>
    {
        const retVal = this.authService.isAuthenticated();

        const subscription = retVal.subscribe(
            ((userLoggedIn: boolean) => {
                if (!userLoggedIn)
                {
                    this.routerService.navigate(['login']);
                }

            }),
            ((error: any) => console.error(error))
        );

        subscription.unsubscribe();

        return retVal;
    }
}
