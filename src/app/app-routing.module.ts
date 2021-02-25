import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { MeteringDevicesComponent } from './components/metering-devices/metering-devices.component';

const routes: Routes = [
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'metering-devices', component: MeteringDevicesComponent },
  { path: '',   redirectTo: '/authorization', pathMatch: 'full' },
  { path: '**', redirectTo: '/authorization' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
