import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { SangamNetworkService } from '../sangam-network.service'


@Component({
  selector: 'app-snd2',
  templateUrl: './snd2.component.html',
  styleUrls: ['./snd2.component.scss']
})
export class Snd2Component implements OnInit {

  constructor(private sangamNetworkService: SangamNetworkService) { }

  ngOnInit(): void {
  }

   // Each Column Definition results in one Column.
 public columnDefs: ColDef[] = [
  { field: 'port'},
  { field: 'description'},
  { field: 'state' },
  { field: 'vlan' },
  { field: 'duplex' },
  { field: 'speed' },
  { field: 'type' },
];

// DefaultColDef sets props common to all Columns
public defaultColDef: ColDef = {
  sortable: true,
  filter: true,
};

// Data that gets displayed in the grid
public rowData?: any;

// For accessing the Grid's API
@ViewChild(AgGridAngular) agGrid!: AgGridAngular;


// Example load data from sever
onGridReady(params: GridReadyEvent) {
  this.sangamNetworkService.getSnd2Status().subscribe(
    (data: any) => {
      this.rowData = data.interfaces;
      console.log(data);
    });
}

// Example of consuming Grid Event
onCellClicked( e: CellClickedEvent): void {
  console.log('cellClicked', e);
}

}
