import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/Models/Equipo';
import { ServiceChampions } from 'src/app/Services/champions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  public equipo!: Equipo;

  constructor(private _service:ServiceChampions, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe((params)=>{
      var idequipo = params['idEquipo'];
      this._service.getEquipoId(idequipo).subscribe(response=>{
      this.equipo = response;
    })
    })
    
  }

}
