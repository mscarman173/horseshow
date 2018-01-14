import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashRegisterComponent } from './cash-register/cash-register.component'
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: CashRegisterComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
