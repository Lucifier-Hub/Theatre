import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingComponent } from './booking.component';
import { BillingComponent } from './billing/billing.component';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    children: [{ path: 'billing', component: BillingComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
