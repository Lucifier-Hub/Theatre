import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { BookingRoutingModule } from './booking-routing.module';
import { BillingComponent } from './billing/billing.component';

@NgModule({
  declarations: [BookingComponent, BillingComponent],
  imports: [CommonModule, BookingRoutingModule],
})
export class BookingModule {}
