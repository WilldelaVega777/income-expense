//------------------------------------------------------------------------------------------------------
// Imports Section (Angular Libraries)
//------------------------------------------------------------------------------------------------------
import { RouterModule }                 from '@angular/router';
import { NgModule }                     from '@angular/core';
import { Routes }                       from '@angular/router';
import { LoginComponent }               from '../views/auth/login/login.component';
import { RegisterComponent }            from '../views/auth/register/register.component';

//------------------------------------------------------------------------------------------------------
// Imports Section (App Guards)
//------------------------------------------------------------------------------------------------------
import { AuthGuardService }             from '../services/auth.guard';


//------------------------------------------------------------------------------------------------------
// Routes Const Section
//------------------------------------------------------------------------------------------------------
const routes: Routes = [

    { path: 'login',    component: LoginComponent    },
    { path: 'register', component: RegisterComponent },
    {
        path: '',
        loadChildren: '../modules/income-outcome.module#IncomeOutcomeModule',
        canLoad: [ AuthGuardService ]
    }

];


//------------------------------------------------------------------------------------------------------
// Imports Section (App Components)
//------------------------------------------------------------------------------------------------------
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ]
})
//------------------------------------------------------------------------------------------------------
// Class Section
//------------------------------------------------------------------------------------------------------
export class AppRoutingModule {}
