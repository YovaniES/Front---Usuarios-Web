import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RestriccionService } from 'src/app/services/restriccion.service';
import { crearRestriccionComponent } from '../crear-Restriccion/crear-restriccion.component';

@Component({
  selector: 'app-restriccion-list',
  templateUrl: './restriccion-list.component.html',
  styleUrls: ['./restriccion-list.component.scss'],
})
export class RestriccionListComponent implements OnInit {
  isPopupOpened = true;

  constructor(
    private dialog: MatDialog,
    private _restriccionService: RestriccionService
  ) {}

  ngOnInit() {}

  get RestriccionList() {
    return this._restriccionService.getAllRestriccion();
  }

  addRestriccion() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(crearRestriccionComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.isPopupOpened = false;
    });
  }

}
