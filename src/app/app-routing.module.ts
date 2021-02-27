import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { MeteringDevicesComponent } from './components/metering-devices/metering-devices.component';
import { MeteringDevicesListComponent } from './components/metering-devices-list/metering-devices-list.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { NotAuthorizationGuard } from './guards/not-authorization.guard';

const routes: Routes = [
  { path: 'authorization', component: AuthorizationComponent, canActivate: [NotAuthorizationGuard]},
  { 
    path: 'metering-devices',
    component: MeteringDevicesComponent,
    canActivate: [AuthorizationGuard],
    children: [
      { path: '', component: MeteringDevicesListComponent }
    ] 
  },
  { path: '',   redirectTo: '/metering-devices', pathMatch: 'full' },
  { path: '**', redirectTo: '/authorization' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
