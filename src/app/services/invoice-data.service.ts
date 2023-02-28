import { Injectable } from '@angular/core';
import { InvoiceDetailsComponent } from '../components/invoice-details/invoice-details.component';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDataService {

  constructor() { }

  getInvoiceDetails() {
    return [
      {"description": "Glitters (Light Yellow)", "qty": 1, "unitPrice": 200.00, "totalPrice": 200.00},
      {"description": "Scented Paper", "qty": 2, "unitPrice": 200.00, "totalPrice": 400.00},
      {"description": "Pink Ribbon", "qty": 2, "unitPrice": 150.00, "totalPrice": 300.00},
      {"description": "Card (Blue)", "qty": 4, "unitPrice": 25.00, "totalPrice": 100.00},
      {"description": "Assorted Paper", "qty": 3, "unitPrice": 60.00, "totalPrice": 180.00},
      {"description": "Vellum Board", "qty": 3, "unitPrice": 80.00, "totalPrice": 240.00}
    ];
  }

  getTotalPrice() {
    let sum: number = 0;
    this.getInvoiceDetails().forEach(a => sum += a.totalPrice);
    return(sum);
  }
}
