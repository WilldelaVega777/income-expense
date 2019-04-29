//----------------------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------------------
import { Injectable }                   from '@angular/core';
import { CanActivate }                  from '@angular/router';
import { CanLoad }                      from '@angular/router';
import { Router }                       from '@angular/router';
import { AuthService }                  from 'src/app/services/auth.service';
import { Observable }                   from 'rxjs';
import { Subscription }                 from 'rxjs';
import { take }                         from 'rxjs/operators';

//----------------------------------------------------------------------------
// Service Configuration Section
//----------------------------------------------------------------------------
@Injectable({
  providedIn: 'root'
})
//----------------------------------------------------------------------------
// Service Class Section
//----------------------------------------------------------------------------
export class AuthGuardService implements CanActivate, CanLoad
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
                    subscription.unsubscribe();
                    this.routerService.navigate(['login']);
                }

            }),
            ((error: any) => {
                subscription.unsubscribe();
                console.error(error);
            })
        );

        return retVal;
    }

    //------------------------------------------------------------------------
    canLoad() : Promise<boolean>
    {
        return new Promise((resolve, reject) => {

            const retVal = this.authService.isAuthenticated();
            const subscription: Subscription = retVal
            .pipe(take(1))
            .subscribe(
                ((userLoggedIn: boolean) => {
                    if (!userLoggedIn)
                    {
                        subscription.unsubscribe();
                        this.routerService.navigate(['login']);
                    }
                    resolve(userLoggedIn);
                }),
                ((error: any) => {
                    subscription.unsubscribe();
                    reject(error);
                })
            );

        });
    }
}
