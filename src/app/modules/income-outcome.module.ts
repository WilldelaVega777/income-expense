
//--------------------------------------------------------------------------------
// Imports Section
//--------------------------------------------------------------------------------
import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { ReactiveFormsModule }      from '@angular/forms';
import { ChartsModule }             from 'ng2-charts';

import { StoreModule }              from '@ngrx/store';
import { incomeOutcomeReducer }     from '../redux/reducers/income-outcome.reducer';

import { DashboardRoutingModule }   from './dashboard-routing.module';
import { SharedModule }             from './shared.module';

import { DashboardComponent }       from './../views/dashboard/dashboard.component';
import { EstadisticaComponent }     from './../views/ingresos-egresos/estadistica/estadistica.component';
import { IngresoEgresoComponent }   from './../views/ingresos-egresos/ingreso-egreso/ingreso-egreso.component';
import { DetalleComponent }         from './../views/ingresos-egresos/detalle/detalle.component';

import { OrdenIngresoEgresoPipe }   from './../pipes/orden-ingreso-egreso.pipe';


//--------------------------------------------------------------------------------
// Module Configuration Section
//--------------------------------------------------------------------------------
@NgModule({
    declarations: [
        DashboardComponent,
        IngresoEgresoComponent,
        EstadisticaComponent,
        DetalleComponent,
        OrdenIngresoEgresoPipe
    ],
    imports: [
        DashboardRoutingModule,
        StoreModule.forFeature('incomeOutcome', incomeOutcomeReducer),
        SharedModule,
        CommonModule,
        ReactiveFormsModule,
        ChartsModule
    ],
    exports: [
        DashboardComponent
    ]
})
//--------------------------------------------------------------------------------
// Module Class Section
//--------------------------------------------------------------------------------
export class IncomeOutcomeModule {}
