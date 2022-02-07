import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Angular material
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UsuariosComponent } from './usuariosLista/usuarios.component';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { RestriccionService } from '../services/restriccion.service';
import { crearRestriccionComponent } from './crear-Restriccion/crear-restriccion.component';
import { RestriccionListComponent } from './restriccion-list/restriccion-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
@NgModule({
  declarations: [
    UsuariosComponent,
    crearRestriccionComponent,
    RestriccionListComponent,
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule /* importamos para el RouterLink */,
    ReactiveFormsModule,

    //Angular material
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,

  ],

  exports: [
    UsuariosComponent,
    crearRestriccionComponent,
    RestriccionListComponent,
    RouterModule,

    /*Angular material*/
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,

  ],

 /*  providers: [RestriccionService],
  entryComponents: [crearRestriccionComponent], */
  //bootstrap: [AppComponent]

})

export class UsuarioModule {}
