import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-metering-devices',
  templateUrl: './metering-devices.component.html',
  styleUrls: ['./metering-devices.component.less']
})
export class MeteringDevicesComponent implements OnInit, AfterViewInit {
  public displayedColumns: Array<string> = ['id', 'name', 'last_active'];
  public dataSource: MatTableDataSource<MeteringDevice> = new MatTableDataSource<MeteringDevice>(METERING_DEVICES);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

export interface MeteringDevice {
  id: number;
  name: string;
  last_active: string;
}

const METERING_DEVICES: MeteringDevice[] = [
  {id: 1, name: 'Device 1', last_active: '26.02.2021 12:00'},
  {id: 2, name: 'Device 2', last_active: '26.02.2021 12:00'},
  {id: 3, name: 'Device 3', last_active: '26.02.2021 12:00'},
  {id: 4, name: 'Device 4', last_active: '26.02.2021 12:00'},
  {id: 5, name: 'Device 5', last_active: '26.02.2021 12:00'},
  {id: 6, name: 'Device 6', last_active: '26.02.2021 12:00'},
  {id: 7, name: 'Device 7', last_active: '26.02.2021 12:00'},
  {id: 8, name: 'Device 8', last_active: '26.02.2021 12:00'},
  {id: 9, name: 'Device 9', last_active: '26.02.2021 12:00'},
  {id: 10, name: 'Device 10', last_active: '26.02.2021 12:00'},
  {id: 11, name: 'Device 11', last_active: '26.02.2021 12:00'},
  {id: 12, name: 'Device 12', last_active: '26.02.2021 12:00'},
  {id: 13, name: 'Device 13', last_active: '26.02.2021 12:00'},
  {id: 14, name: 'Device 14', last_active: '26.02.2021 12:00'},
  {id: 15, name: 'Device 15', last_active: '26.02.2021 12:00'},
  {id: 16, name: 'Device 16', last_active: '26.02.2021 12:00'},
  {id: 17, name: 'Device 17', last_active: '26.02.2021 12:00'},
  {id: 18, name: 'Device 18', last_active: '26.02.2021 12:00'},
  {id: 19, name: 'Device 19', last_active: '26.02.2021 12:00'},
  {id: 20, name: 'Device 20', last_active: '26.02.2021 12:00'},
];
