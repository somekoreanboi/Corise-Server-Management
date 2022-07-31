import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import {MokdongNetworkService} from '../mokdong-network.service'

@Component({
  selector: 'app-snd1',
  templateUrl: './snd1.component.html',
  styleUrls: ['./snd1.component.scss']
})
export class Snd1Component implements OnInit {

  constructor(private mokdongNetworkService: MokdongNetworkService) { }

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
    this.mokdongNetworkService.getSnd1Status().subscribe(
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
