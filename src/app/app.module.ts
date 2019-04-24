//------------------------------------------------------------------------------------------------------
// Imports Section (Angular Libraries)
//------------------------------------------------------------------------------------------------------
import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { RouterModule }                     from '@angular/router';
import { AppRoutingModule }                 from './app.routing.module';

//------------------------------------------------------------------------------------------------------
// Imports Section (App Components)
//------------------------------------------------------------------------------------------------------
import { AppComponent }                     from './views/main/app.component';
import { LoginComponent }                   from './views/auth/login/login.component';
import { RegisterComponent }                from './views/auth/register/register.component';
import { DashboardComponent }               from './views/dashboard/dashboard.component';
import { IngresoEgresoComponent }           from './views/ingresos-egresos/ingreso-egreso/ingreso-egreso.component';
import { DetalleComponent }                 from './views/ingresos-egresos/detalle/detalle.component';
import { EstadisticaComponent }             from './views/ingresos-egresos/estadistica/estadistica.component';
import { NavbarComponent }                  from './components/shared/navbar/navbar.component';
import { SidebarComponent }                 from './components/shared/sidebar/sidebar.component';
import { FooterComponent }                  from './components/shared/footer/footer.component';

//------------------------------------------------------------------------------------------------------
// Module Configuration Section
//------------------------------------------------------------------------------------------------------
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        DashboardComponent,
        IngresoEgresoComponent,
        DetalleComponent,
        EstadisticaComponent,
        NavbarComponent,
        SidebarComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
//------------------------------------------------------------------------------------------------------
// Class Section
//------------------------------------------------------------------------------------------------------
export class AppModule { }
