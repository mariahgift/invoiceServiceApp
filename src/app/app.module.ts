import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';
import { TotalPurchaseComponent } from './components/total-purchase/total-purchase.component';
import { InvoiceDataService } from './services/invoice-data.service';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceDetailsComponent,
    TotalPurchaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InvoiceDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
