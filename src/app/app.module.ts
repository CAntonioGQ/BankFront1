import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAmountsComponent } from './components/amount/list-amounts/list-amounts.component';
import { AddEditAmountComponent } from './components/amount/add-edit-amount/add-edit-amount.component';
import { ListClientComponent } from './components/client/list-client/list-client.component';
import { AddEditClientComponent } from './components/client/add-edit-client/add-edit-client.component';
import { ListLoansComponent } from './components/loan/list-loans/list-loans.component';
import { AddEditLoanComponent } from './components/loan/add-edit-loan/add-edit-loan.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListPaymentComponent } from './components/payment/list-payment/list-payment.component';
import { AddEditPaymentComponent } from './components/payment/add-edit-payment/add-edit-payment.component';

import { HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AmortizationComponent } from './components/amortization/amortization.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAmountsComponent,
    AddEditAmountComponent,
    ListClientComponent,
    AddEditClientComponent,
    ListLoansComponent,
    AddEditLoanComponent,
    NavbarComponent,
    ListPaymentComponent,
    AddEditPaymentComponent,
    AmortizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
