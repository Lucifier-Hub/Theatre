import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
})
export class BillingComponent implements OnInit {
  showCard: boolean;
  showButton: boolean;
  constructor() {}

  ngOnInit(): void {}

  setShowCard() {
    this.showCard = true;
    this.showButton = true;
  }

  setDisableCard() {
    this.showCard = false;
    this.showButton = true;
  }
}
