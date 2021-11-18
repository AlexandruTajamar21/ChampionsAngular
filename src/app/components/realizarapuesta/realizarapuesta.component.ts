import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceChampions } from 'src/app/Services/champions.service';

@Component({
  selector: 'app-realizarapuesta',
  templateUrl: './realizarapuesta.component.html',
  styleUrls: ['./realizarapuesta.component.css']
})
export class RealizarapuestaComponent implements OnInit {

  @ViewChild("cajausuario") cajausuario!: ElementRef;
  @ViewChild("cajaRM") cajaRM!: ElementRef;
  @ViewChild("cajaATM") cajaATM!: ElementRef;
  @ViewChild("cajafecha") cajafecha!: ElementRef;

  constructor(private _service:ServiceChampions, private _router:Router) { }

  ngOnInit(): void {
  }

  realizarApuesta():void{
    var usuario = this.cajausuario.nativeElement.value;
    var resultado = this.cajaRM.nativeElement.value + "-" + this.cajaATM.nativeElement.value;
    var fecha = this.cajafecha.nativeElement.value;
    var apuesta = {
      idApuesta:0
      ,Usuario: usuario
      ,Resultado: resultado
      ,Fecha:fecha
    }
    this._service.realizarApuesta(apuesta).subscribe(response=>{
      this._router.navigate(["/apuestas"]);
    })
  }

}
