
//------------------------------------------------------------------------------------------------------
// Imports Section (Angular Libraries)
//------------------------------------------------------------------------------------------------------
import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { RouterModule }                     from '@angular/router';
import { AppRoutingModule }                 from './app.routing.module';
import { FormsModule }                      from '@angular/forms';
import { ReactiveFormsModule }              from '@angular/forms';

//------------------------------------------------------------------------------------------------------
// Imports Section (Firebase)
//------------------------------------------------------------------------------------------------------
import { AngularFireModule }                from 'angularfire2';
import { AngularFirestoreModule }           from 'angularfire2/firestore';
import { AngularFireAuthModule }            from 'angularfire2/auth';
import { environment }                      from '../environments/environment';

//------------------------------------------------------------------------------------------------------
// Imports Section (Redux)
//------------------------------------------------------------------------------------------------------
import { StoreModule }                      from '@ngrx/store';
import { StoreDevtoolsModule }              from '@ngrx/store-devtools';
import { appReducers }                      from './redux/reducers/app.reducer';

//------------------------------------------------------------------------------------------------------
// Imports Section (Charts)
//------------------------------------------------------------------------------------------------------
import { ChartsModule }                     from 'ng2-charts';

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
// Imports Section (App Pipes)
//------------------------------------------------------------------------------------------------------
import { OrdenIngresoEgresoPipe }           from './pipes/orden-ingreso-egreso.pipe';



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
        FooterComponent,

        OrdenIngresoEgresoPipe
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        ChartsModule,
        StoreModule.forRoot(appReducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
//------------------------------------------------------------------------------------------------------
// Class Section
//------------------------------------------------------------------------------------------------------
export class AppModule { }
