import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Vehicles } from 'src/app/core/models/vehicle';
import { VehicleService } from 'src/app/core/services/vehicle.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {
  vehicles!: Vehicles[];
  displayedColumns = ['placa', 'chassi', 'renavam', 'modelo', 'marca', 'ano' ];
  public dataSource = new MatTableDataSource<Vehicles>();

  constructor( private vehicleService: VehicleService ) { }

  ngOnInit(): void {
    this.getVehicles();
  }

  getVehicles(){
    this.vehicleService.listVehicles().subscribe((res: any) => {
      this.dataSource.data = res;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
