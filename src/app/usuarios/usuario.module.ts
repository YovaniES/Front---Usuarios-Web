import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariolistComponent } from './usuariolist/usuariolist.component';
import { FiltroPipe } from './pipes/filtro.pipe';



@NgModule({
  declarations: [
    UsuariolistComponent,
    FiltroPipe
  ],

  imports: [
    CommonModule
  ],

  exports:[
    UsuariolistComponent
  ]
})
export class UsuarioModule { }
