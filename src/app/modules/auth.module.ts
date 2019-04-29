//--------------------------------------------------------------------------------
// Imports Section (Angular)
//--------------------------------------------------------------------------------
import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { RouterModule }             from '@angular/router';
import { FormsModule }              from '@angular/forms';

//--------------------------------------------------------------------------------
// Imports Section (Firebase)
//--------------------------------------------------------------------------------
import { AngularFireAuthModule }    from 'angularfire2/auth';

//--------------------------------------------------------------------------------
// Imports Section (App)
//--------------------------------------------------------------------------------
import { LoginComponent }           from '../views/auth/login/login.component';
import { RegisterComponent }        from '../views/auth/register/register.component';


//--------------------------------------------------------------------------------
// Module Configuration Section
//--------------------------------------------------------------------------------
@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AngularFireAuthModule,
        RouterModule
    ]
})
//--------------------------------------------------------------------------------
// Module Class Section
//--------------------------------------------------------------------------------
export class AuthModule {}
