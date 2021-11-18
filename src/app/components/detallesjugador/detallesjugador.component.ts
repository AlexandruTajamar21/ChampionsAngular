import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from 'src/app/Models/Jugador';
import { ServiceChampions } from 'src/app/Services/champions.service';

@Component({
  selector: 'app-detallesjugador',
  templateUrl: './detallesjugador.component.html',
  styleUrls: ['./detallesjugador.component.css']
})
export class DetallesjugadorComponent implements OnInit {

  public jugador!: Jugador;

  constructor(private _service:ServiceChampions, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params)=>{
      var idjugador = params['idJugador'];
      this._service.getJugadorId(idjugador).subscribe(response=>{
      this.jugador = response;
    })
    })
    
  }

}
