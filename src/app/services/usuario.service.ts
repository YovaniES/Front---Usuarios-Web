import { Injectable } from '@angular/core';
import { ListUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: ListUsuario[] = [
    {id: '1', nombre:'Kalen Valle',         restriccion1:'NO', restriccion2:'SI', cumplio:'SI'},
    {id: '2', nombre:'Belinda Valle',       restriccion1:'NO', restriccion2:'SI', cumplio:'SI'},
    {id: '3', nombre:'Jane Medina',         restriccion1:'NO', restriccion2:'SI', cumplio:'SI'},
    {id: '4', nombre:'Andrea Cameron B.',   restriccion1:'NO', restriccion2:'SI', cumplio:'SI'},
    {id: '5', nombre:'Mary Torres',         restriccion1:'NO', restriccion2:'SI', cumplio:'SI'},
    {id: '6', nombre:'Kim Calderon',        restriccion1:'NO', restriccion2:'SI', cumplio:'SI'},
    {id: '7', nombre:'Jane Medina',         restriccion1:'NO', restriccion2:'SI', cumplio:'SI'},
    {id: '8', nombre:'Andrea Tapia B.',     restriccion1:'NO', restriccion2:'SI', cumplio:'SI'},
    {id: '9', nombre:'Bruno Angeles B.',    restriccion1:'NO', restriccion2:'SI', cumplio:'SI'},
    {id: '10',nombre:'Camila Cameron B.',   restriccion1:'NO', restriccion2:'SI', cumplio:'SI'},
    {id: '11',nombre:'Daniel Alarcon B.',   restriccion1:'NO', restriccion2:'SI', cumplio:'SI'},
    {id: '12',nombre:'Ceci Ceron B.',       restriccion1:'NO', restriccion2:'SI', cumplio:'NO'},
    {id: '13',nombre:'Jhonatan Cameron B.', restriccion1:'NO', restriccion2:'SI', cumplio:'NO'},
  ];


  constructor() { }


  getUsuarios(){
    return this.listUsuarios.slice();
  }
}
