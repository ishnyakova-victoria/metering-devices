import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, of as observableOf } from 'rxjs';
import { startWith, switchMap, map, catchError } from 'rxjs/operators';
import { MeteringDeviceService } from '../../services/metering-device.service';
import { MeteringDevice } from '../../types/types';

@Component({
  selector: 'app-metering-devices-list',
  templateUrl: './metering-devices-list.component.html',
  styleUrls: ['./metering-devices-list.component.less']
})
export class MeteringDevicesListComponent implements OnInit, AfterViewInit {
  public displayedColumns: Array<string> = ['id', 'name', 'last_active'];
  public dataSource: Array<MeteringDevice> = [];
  public resultsLength: number = 0;
  public perPage: number = 10;
  public isLoadingResults: boolean = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _meteringDeviceService: MeteringDeviceService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;

          return this._meteringDeviceService.load(this.paginator.pageIndex + 1, this.sort.active, this.sort.direction, this.perPage);
        }),
        map((data: any) => {
          this.isLoadingResults = false;
          this.resultsLength = data?.data?.metering_devices?.total || 0;

          return data?.data?.metering_devices?.data || [];
        }),
        catchError(() => {
          this.isLoadingResults = false;
          
          return observableOf([]);
        })
      )
      .subscribe(
        (data: Array<MeteringDevice>) => {
          this.dataSource = data;
        },
        (error) => { },
        () => { }
      );
  }

}
