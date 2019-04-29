//--------------------------------------------------------------------------------
// Imports Section (Angular)
//--------------------------------------------------------------------------------
import { NgModule }                 from '@angular/core';
import { Routes }                   from '@angular/router';
import { RouterModule }             from '@angular/router';

//--------------------------------------------------------------------------------
// Imports Section (App Components)
//--------------------------------------------------------------------------------
import { DashboardComponent } from './../views/dashboard/dashboard.component';

//--------------------------------------------------------------------------------
// Imports Section (Routes)
//--------------------------------------------------------------------------------
import { dashboardRoutes } from './../routes/dashboard.routes';1


//--------------------------------------------------------------------------------
// Routes Declararion Section
//--------------------------------------------------------------------------------
const routes: Routes = [
    {
        path        : '',
        component   : DashboardComponent,
        children    : dashboardRoutes
    },
    { path: '**', redirectTo: ''}
];


//--------------------------------------------------------------------------------
// Module Configuration Section
//--------------------------------------------------------------------------------
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
//--------------------------------------------------------------------------------
// Module Class Section
//--------------------------------------------------------------------------------
export class DashboardRoutingModule {}
