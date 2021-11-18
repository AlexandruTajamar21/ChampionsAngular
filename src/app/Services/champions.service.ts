import { Injectable } from "@angular/core";
import { Global } from "../Global";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Apuesta } from "../Models/Apuesta";

@Injectable()
export class ServiceChampions{
    constructor(private _http:HttpClient){

    }

    getEquipos():Observable<any>{
        var request = "api/Equipos"
        var url = Global.urlchampions + request;
        return this._http.get(url);
    }

    getEquipoId(id:number):Observable<any>{
        var request = "api/Equipos/" + id;
        var url = Global.urlchampions + request;
        return this._http.get(url);
    }
    getJugadoresEquipo(idEquipo:number):Observable<any>{
        var request = "api/Jugadores/JugadoresEquipos/" + idEquipo;
        var url = Global.urlchampions + request;
        return this._http.get(url);
    }
    getJugadorId(idjugador:number):Observable<any>{
        var request = "api/Jugadores/" + idjugador;
        var url = Global.urlchampions + request;
        return this._http.get(url);
    }

    getApuestas():Observable<any>{
        var request = "api/Apuestas";
        var url = Global.urlchampions + request;
        return this._http.get(url);
    }

    realizarApuesta(apuesta:Apuesta):Observable<any>{
        var request = "api/Apuestas";
        var url = Global.urlchampions + request;
        var ap = JSON.stringify(apuesta)
        return this._http.post(url,ap);
    }
}