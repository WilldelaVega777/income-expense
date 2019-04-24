import { Routes } from '@angular/router';
import { EstadisticaComponent } from './../ingresos-egresos/estadistica/estadistica.component';
import { IngresoEgresoComponent } from '../ingresos-egresos/ingreso-egreso/ingreso-egreso.component';
import { DetalleComponent } from '../ingresos-egresos/detalle/detalle.component';

export const dashboardRoutes: Routes = [
    { path: '',               component: EstadisticaComponent   },
    { path: 'ingreso-egreso', component: IngresoEgresoComponent },
    { path: 'detalle',        component: DetalleComponent       }
];

