//----------------------------------------------------------------------------
// Imports Section
//----------------------------------------------------------------------------
import { Injectable }                       from '@angular/core';
import { AngularFireAuth }                  from 'angularfire2/auth';
import { AngularFirestore }                 from 'angularfire2/firestore';
import { Observable }                       from 'rxjs';
import { map }                              from 'rxjs/operators';

import { IUser }                            from 'src/app/models/user.model';


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

            const newUser: IUser = { nombre, email, password };

            this.authService.auth.createUserWithEmailAndPassword(email, password)
            .then((credential: firebase.auth.UserCredential) => {

                newUser.uid = credential.user.uid;

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
        return this.authService.auth.signOut();
    }
    //------------------------------------------------------------------------
    public initAuthListener(): Observable<firebase.User>
    {
        return (this.authService.authState);
    }
    //------------------------------------------------------------------------
    public isAuthenticated(): Observable<boolean>
    {
        return this.authService.authState.pipe(
            map(firebaseUser => firebaseUser != null)
        );
    }

}
