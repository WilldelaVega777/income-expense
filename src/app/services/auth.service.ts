//----------------------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------------------
import { Injectable }                       from '@angular/core';
import { AngularFireAuth }                  from 'angularfire2/auth';
import { AngularFirestore }                 from 'angularfire2/firestore';
import { Observable }                       from 'rxjs';
import { Observer }                         from 'rxjs';
import { Subscription }                     from 'rxjs/';
import { map }                              from 'rxjs/operators';
import { filter }                           from 'rxjs/operators';

import { IUser }                            from 'src/app/models/user.model';
import { User } from 'firebase';


//----------------------------------------------------------------------------
// Service Configuration Section
//----------------------------------------------------------------------------
@Injectable({
    providedIn: 'root'
})
//----------------------------------------------------------------------------
// Service Class Section
//----------------------------------------------------------------------------
export class AuthService
{
    //------------------------------------------------------------------------
    // Private Properties Section
    //------------------------------------------------------------------------
    private authService                     : AngularFireAuth;
    private dbService                       : AngularFirestore;

    private user                            : IUser;

    //------------------------------------------------------------------------
    // Constructor Method Section
    //------------------------------------------------------------------------
    constructor(as: AngularFireAuth, ds: AngularFirestore)
    {
        this.authService    = as;
        this.dbService      = ds;
    }

    //------------------------------------------------------------------------
    // Public Methods Section
    //------------------------------------------------------------------------
    public crearUsuario(nombre: string, email: string, password: string) : Promise<void>
    {
        return new Promise((resolve, reject) => {

            const newUser: { uid?: string, nombre: string, email: string, password: string } = { nombre, email, password };

            this.authService.auth.createUserWithEmailAndPassword(email, password)
            .then((credential: firebase.auth.UserCredential) => {

                newUser.uid = credential.user.uid;
                delete newUser.password;

                this.dbService.doc(`${credential.user.uid}/usuario`).set(newUser)
                .then(() => {
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
            })
            .catch(error => {
                reject(error);
            });
        });
    }
    //------------------------------------------------------------------------
    public login(email: string, password: string): Promise<void>
    {
        return new Promise((resolve, reject) => {
            this.authService.auth.signInWithEmailAndPassword(email, password)
            .then((credential: firebase.auth.UserCredential) => {
                resolve();
            })
            .catch((error) => reject(error));
        });
    }
    //------------------------------------------------------------------------
    public logout(): Promise<void>
    {
        this.user = null;
        return this.authService.auth.signOut();
    }
    //------------------------------------------------------------------------
    public initAuthListener(): Observable<IUser>
    {
        let userSubscription$ : Subscription = new Subscription();
        return Observable.create((observer: Observer<any>) => {

            this.authService.authState
            .pipe(
                filter((user: firebase.User) => user != null)
            )
            .subscribe((user: firebase.User) => {
                if (user)
                {
                    userSubscription$ = this.dbService.doc(`${user.uid}/usuario`)
                    .valueChanges()
                    .subscribe((snapshot: IUser) => {
                        this.user = (<IUser>{ ...snapshot });
                        observer.next({...snapshot});
                    },
                    error => observer.error(error));
                }
                else
                {
                    this.user = null;
                    userSubscription$.unsubscribe();
                    observer.error('User does not exist');
                }
            });
        });
    }
    //------------------------------------------------------------------------
    public isAuthenticated(): Observable<boolean>
    {
        return this.authService.authState.pipe(
            map(firebaseUser => firebaseUser != null)
        );
    }
    //------------------------------------------------------------------------
    public getCurrentUser() : IUser
    {
        return { ...this.user };
    }

}
