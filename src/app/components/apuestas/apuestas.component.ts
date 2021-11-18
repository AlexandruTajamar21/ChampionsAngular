import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apuesta } from 'src/app/Models/Apuesta';
import { ServiceChampions } from 'src/app/Services/champions.service';

@Component({
  selector: 'app-apuestas',
  templateUrl: './apuestas.component.html',
  styleUrls: ['./apuestas.component.css']
})
export class ApuestasComponent implements OnInit {

  public apuestas!: Array<Apuesta>;

  constructor(private _service:ServiceChampions, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._service.getApuestas().subscribe(response=>{
      this.apuestas = response;
    })
  }
}
