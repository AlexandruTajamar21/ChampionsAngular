import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from 'src/app/Models/Jugador';
import { ServiceChampions } from 'src/app/Services/champions.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  public jugadores!: Array<Jugador>;

  constructor(private _service:ServiceChampions, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params)=>{
      var idequipo = params['idEquipo'];
      this._service.getJugadoresEquipo(idequipo).subscribe(response=>{
      this.jugadores = response;
    })
    })
  }

}
