//--------------------------------------------------------------------------------------------------
// Imports Section (Angular)
//--------------------------------------------------------------------------------------------------
import { Routes } from '@angular/router';

//--------------------------------------------------------------------------------------------------
// Imports Section (App/Module Components)
//--------------------------------------------------------------------------------------------------
import { EstadisticaComponent }     from '../views/ingresos-egresos/estadistica/estadistica.component';
import { IngresoEgresoComponent }   from '../views/ingresos-egresos/ingreso-egreso/ingreso-egreso.component';
import { DetalleComponent }         from '../views/ingresos-egresos/detalle/detalle.component';


//--------------------------------------------------------------------------------------------------
// Routes Definition Section
//--------------------------------------------------------------------------------------------------
export const dashboardRoutes: Routes = [
    { path: '',               component: EstadisticaComponent   },
    { path: 'ingreso-egreso', component: IngresoEgresoComponent },
    { path: 'detalle',        component: DetalleComponent       }
];

