
//------------------------------------------------------------------------------------------------------
// Imports Section (Angular Libraries)
//------------------------------------------------------------------------------------------------------
import { NgModule }                         from '@angular/core';
import { BrowserModule }                    from '@angular/platform-browser';
import { RouterModule }                     from '@angular/router';
import { AppRoutingModule }                 from './routes/app.routing.module';

//------------------------------------------------------------------------------------------------------
// Imports Section (Firebase)
//------------------------------------------------------------------------------------------------------
import { AngularFireModule }                from 'angularfire2';
import { AngularFirestoreModule }           from 'angularfire2/firestore';
import { environment }                      from '../environments/environment';

//------------------------------------------------------------------------------------------------------
// Imports Section (Redux)
//------------------------------------------------------------------------------------------------------
import { StoreModule }                      from '@ngrx/store';
import { StoreDevtoolsModule }              from '@ngrx/store-devtools';
import { appReducers }                      from './redux/reducers/app.reducer';

//------------------------------------------------------------------------------------------------------
// Imports Section (App Modules)
//------------------------------------------------------------------------------------------------------
import { AuthModule }                       from 'src/app/modules/auth.module';
import { IncomeOutcomeModule }              from 'src/app/modules/income-outcome.module';

//------------------------------------------------------------------------------------------------------
// Imports Section (App Components)
//------------------------------------------------------------------------------------------------------
import { AppComponent }                     from './views/main/app.component';


//------------------------------------------------------------------------------------------------------
// Module Configuration Section
//------------------------------------------------------------------------------------------------------
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,

        AuthModule,

        RouterModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        StoreModule.forRoot(appReducers),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        }),
    ],
    bootstrap: [AppComponent]
})
//------------------------------------------------------------------------------------------------------
// Class Section
//------------------------------------------------------------------------------------------------------
export class AppModule { }
