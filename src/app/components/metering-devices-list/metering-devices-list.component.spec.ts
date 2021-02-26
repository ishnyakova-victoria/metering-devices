import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteringDevicesListComponent } from './metering-devices-list.component';

describe('MeteringDevicesListComponent', () => {
  let component: MeteringDevicesListComponent;
  let fixture: ComponentFixture<MeteringDevicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteringDevicesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeteringDevicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
