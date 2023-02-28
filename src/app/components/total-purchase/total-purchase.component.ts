import { Component } from '@angular/core';
import { InvoiceDataService } from 'src/app/services/invoice-data.service';

@Component({
  selector: 'app-total-purchase',
  templateUrl: './total-purchase.component.html',
  styleUrls: ['./total-purchase.component.css']
})
export class TotalPurchaseComponent {
  public invoices: any[] = [];
  totalPrice: number | undefined;

  constructor(private invoiceService: InvoiceDataService) {}

  ngOnInit(): void {
    this.invoices = this.invoiceService.getInvoiceDetails();
    this.totalPrice = this.invoiceService.getTotalPrice();    
  }
}
