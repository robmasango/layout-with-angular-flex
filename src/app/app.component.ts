import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'layout-with-angular-flex-layout';
  lineItems = [
    { description: 'description',  unitCost: '1.23', quantity: '5', amount: '6.15' },
    { description: 'description', hourlyRate: '50.00', quantity: '10', amount: '500.00' }
  ];
  billingAddress = [
    '123 Angular Way',
    'Angular Town, Canada',
    'A1B 2C3'
  ];
  invoiceTotal = 0.0;
  constructor() {
    this.invoiceTotal = this.lineItems.
      map(item => parseFloat(item.amount)).
      reduce((sum, amount) => sum + amount);
  }
}
