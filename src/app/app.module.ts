import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ApuestasComponent } from './components/apuestas/apuestas.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { ServiceChampions } from './Services/champions.service';
import { appRoutingProviders, routing } from './Routing/app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { DetallesjugadorComponent } from './components/detallesjugador/detallesjugador.component';
import { RealizarapuestaComponent } from './components/realizarapuesta/realizarapuesta.component';

@NgModule({
  declarations: [
    MenuComponent,
    AppComponent,
    HomeComponent,
    ApuestasComponent,
    EquiposComponent,
    JugadoresComponent,
    DetallesjugadorComponent,
    RealizarapuestaComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,routing
  ],
  providers: [ServiceChampions,appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
