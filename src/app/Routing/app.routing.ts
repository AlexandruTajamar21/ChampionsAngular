import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "../components/home/home.component";

import { ApuestasComponent } from "../components/apuestas/apuestas.component";
import { EquiposComponent } from "../components/equipos/equipos.component";
import { JugadoresComponent } from "../components/jugadores/jugadores.component";
import { DetallesjugadorComponent } from "../components/detallesjugador/detallesjugador.component";
import { RealizarapuestaComponent } from "../components/realizarapuesta/realizarapuesta.component";

const appRoutes: Routes = [
    {path:"",component:HomeComponent}
    ,{path:"apuestas",component:ApuestasComponent}
    ,{path:"equipo/:idEquipo",component:EquiposComponent}
    ,{path:"jugadores/:idEquipo",component:JugadoresComponent}
    ,{path:"detallesjugador/:idJugador", component:DetallesjugadorComponent}
    ,{path:"realizarapuesta",component:RealizarapuestaComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);