import { Injectable } from '@angular/core';
import { Restriccion } from '../interfaces/restriccion';

@Injectable({
  providedIn: 'root'
})
export class RestriccionService {


  _restricList: Restriccion[] = [];

  constructor() { }

  addRestriccion(restric: Restriccion) {
    restric.ID = this._restricList.length + 1;
    this._restricList.push(restric);
  }


  getAllRestriccion() {
    return this._restricList;
  }
}
