import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

@Pipe({
  name: 'filtro',
})

export class FiltroPipe implements PipeTransform {

  transform(usuarios: Usuario[], page: number = 0, search:string = ''): Usuario[] {

    if (search.length === 0)
      return usuarios.slice(page, page + 5);

      const filterUsuarios = usuarios.filter(usu=>usu.nombre.includes(search))
      return filterUsuarios


  }
}
