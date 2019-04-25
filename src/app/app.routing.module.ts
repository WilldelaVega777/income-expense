//------------------------------------------------------------------------------------------------------
// Imports Section (Angular Libraries)
//------------------------------------------------------------------------------------------------------
import { RouterModule }                 from '@angular/router';
import { NgModule }                     from '@angular/core';
import { Routes }                       from '@angular/router';
import { LoginComponent }               from './views/auth/login/login.component';
import { RegisterComponent }            from './views/auth/register/register.component';
import { DashboardComponent }           from './views/dashboard/dashboard.component';
import { dashboardRoutes }              from './views/dashboard/dashboard.routes';

import { AuthGuardService }             from './services/auth.guard';


//------------------------------------------------------------------------------------------------------
// Routes Const Section
//------------------------------------------------------------------------------------------------------
const routes: Routes = [

    { path: 'login',    component: LoginComponent    },
    { path: 'register', component: RegisterComponent },
    {
        path        : '',
        component   : DashboardComponent,
        children    : dashboardRoutes,
        canActivate : [ AuthGuardService ]
    },
    { path: '**', redirectTo: ''}

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
