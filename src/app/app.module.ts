import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { DoctorserviceService } from './doctorservice.service';
import { DoctorComponent } from './doctor/doctor.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookingAppointmentComponent } from './booking-appointment/booking-appointment.component';
import { BookingService } from './booking.service';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';

// import {Ng2SearchPipe, Ng2SearchPipeModule} from 'ng2-search-filter';
import { AddPateintComponent } from './add-pateint/add-pateint.component';
import { HomeComponent } from './home/home.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { DonationComponent } from './donation/donation.component';
import { LabComponent } from './lab/lab.component';
import { ScannerComponent } from './scanner/scanner.component';
import { QRCodeModule } from 'angularx-qrcode';
import { FreecheckupComponent } from './freecheckup/freecheckup.component';
import { PaymentComponent } from './payment/payment.component';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScanpayComponent } from './scanpay/scanpay.component';
import { CardpayComponent } from './cardpay/cardpay.component'; 

import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { FilterPipe } from './shared/filter.pipe';
import { ApiService } from './service/api.service';
import { CartService } from './service/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BookingAppointmentComponent,
    AddPateintComponent,
    DoctorComponent,
    BookingAppointmentComponent,
    SearchDoctorComponent,
    BookingAppointmentComponent,
    HomeComponent,
    NewAppointmentComponent,
    FooterComponent,
    AboutUsComponent,
    OurServicesComponent,
    DonationComponent,
    LabComponent,
    ScannerComponent,
    FreecheckupComponent,
    PaymentComponent,
    ScanpayComponent,
    CardpayComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule,
    MatDialogModule,

    RouterModule.forRoot([
      // {path: '', component:NavBarComponent},
      {path:'Doctors',component:DoctorComponent},
      {path:'All-Appointments',component:BookingAppointmentComponent},
      {path:'Add-Patient',component:AddPateintComponent},
      {path:'',component:HomeComponent},
      {path:'New-Appointment',component:NewAppointmentComponent},
      {path:'About-Us',component:AboutUsComponent},
      {path:'Our-Services',component:OurServicesComponent},
      {path:'Free-Checkup',component:FreecheckupComponent},
      {path:'Donation',component:DonationComponent},
      {path:'scanner', component:ScannerComponent},
      {path:'lab',component:LabComponent},
      {path:'payment',component:PaymentComponent},
      {path:'', redirectTo:'products',pathMatch:'full'},
      {path:'products', component: ProductsComponent},
      {path:'cart', component: CartComponent}


    ]),

    BrowserAnimationsModule
  ],
  providers: [BookingService,DoctorserviceService,ApiService,CartService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
