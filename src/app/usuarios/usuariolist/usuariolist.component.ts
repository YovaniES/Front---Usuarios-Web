import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-usuariolist',
  templateUrl: './usuariolist.component.html',
  styleUrls: ['./usuariolist.component.scss']
})
export class UsuariolistComponent implements OnInit {
  public page: number = 0;
  public search: string = ''

  usuarios: Usuario[] = [
    {id: '1', nombre:'Junior Valle',      restriccion1:'NO', restriccion2:'SI', restriccion3:'SI'},
    {id: '2', nombre:'Katerin Valle',     restriccion1:'NO', restriccion2:'SI', restriccion3:'SI'},
    {id: '3', nombre:'Jane Medina',       restriccion1:'NO', restriccion2:'SI', restriccion3:'SI'},
    {id: '4', nombre:'Andrea Cameron B.', restriccion1:'NO', restriccion2:'SI', restriccion3:'SI'},
    {id: '5', nombre:'Mary Torres',       restriccion1:'NO', restriccion2:'SI', restriccion3:'SI'},
    {id: '6', nombre:'Kim Calderon',      restriccion1:'NO', restriccion2:'SI', restriccion3:'SI'},
    {id: '7', nombre:'Jane Medina',       restriccion1:'NO', restriccion2:'SI', restriccion3:'SI'},
    {id: '8', nombre:'Andrea Tapia B.',   restriccion1:'NO', restriccion2:'SI', restriccion3:'SI'},
    {id: '9', nombre:'Bruno Angeles B.',  restriccion1:'NO', restriccion2:'SI', restriccion3:'SI'},
    {id: '10',nombre:'Camila Cameron B.', restriccion1:'NO', restriccion2:'SI', restriccion3:'SI'},
    {id: '11',nombre:'Daniel Alarcon B.', restriccion1:'NO', restriccion2:'SI', restriccion3:'SI'},
    {id: '12',nombre:'Ceci Ceron B.',     restriccion1:'NO', restriccion2:'SI', restriccion3:'SI'},
    {id: '13',nombre:'Jhonatan Cameron B.', restriccion1:'NO', restriccion2:'SI', restriccion3:'SI'},

  ]


  constructor() { }

  ngOnInit(): void {
  }

  eliminar(){
    console.log('Eliminando...', this.usuarios)
  }

  nextPage(){
    this.page +=5
  }

  prevPage(){
    if (this.page >0 ) {
     this.page -= 5
    }
  }


  onSearchUsuario(search: string){
    this.page = 0;
    this.search = search
  }

}
