import { Component, OnInit } from '@angular/core';
import { Equipo } from 'src/app/Models/Equipo';
import { ServiceChampions } from 'src/app/Services/champions.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public equipos!: Array<Equipo>;

  constructor(private _service:ServiceChampions) { }

  ngOnInit(): void {
    this._service.getEquipos().subscribe(response=>{
      this.equipos = response;
    })
  }
}
