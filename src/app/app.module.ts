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
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { DonationComponent } from './donation/donation.component';
import { LabComponent } from './lab/lab.component';
import { ScannerComponent } from './scanner/scanner.component';
import { QRCodeModule } from 'angularx-qrcode';
import { FreecheckupComponent } from './freecheckup/freecheckup.component';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScanpayComponent } from './scanpay/scanpay.component';

import { ShowlabtestsComponent } from './showlabtests/showlabtests.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ViewlabtestComponent } from './viewlabtest/viewlabtest.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ViewradiotestsComponent } from './Radiography/viewradiotests/viewradiotests.component';
import { RadioformComponent } from './Radiography/radioform/radioform.component';
import { ShowradiotestsComponent } from './Radiography/showradiotests/showradiotests.component';
import { FrontpagetestComponent } from './frontpagetest/frontpagetest.component';
import { CardpayformComponent } from './cardpayform/cardpayform.component';
import { ShowdonationsComponent } from './donation/showdonations/showdonations.component';



@NgModule({
  declarations: [
    AppComponent,
    BookingAppointmentComponent,
    AddPateintComponent,
    DoctorComponent,
    BookingAppointmentComponent,
    SearchDoctorComponent,
    BookingAppointmentComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    OurServicesComponent,
    DonationComponent,
    LabComponent,
    ScannerComponent,
    FreecheckupComponent,
    ScanpayComponent,
    NavBarComponent,
    ShowlabtestsComponent,
    ViewlabtestComponent,
    ViewradiotestsComponent,
    RadioformComponent,
    ShowradiotestsComponent,
    FrontpagetestComponent,
    CardpayformComponent,
    ShowdonationsComponent,

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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,

    RouterModule.forRoot([
      // {path: '', component:NavBarComponent},
      {path:'Doctors',component:DoctorComponent},
      {path:'All-Appointments',component:BookingAppointmentComponent},
      {path:'Add-Patient',component:AddPateintComponent},
      {path:'',component:HomeComponent},
      {path:'About-Us',component:AboutUsComponent},
      {path:'Our-Services',component:OurServicesComponent},
      {path:'Free-Checkup',component:FreecheckupComponent},
      {path:'Donation',component:DonationComponent},
      {path:'scanner', component:ScannerComponent},
      {path:'lab',component:LabComponent},
      {path:'Labtests',component:ShowlabtestsComponent},
      {path:'Labtests/:labid',component:ViewlabtestComponent},
      {path:'viewlab',component:ViewlabtestComponent},
      {path:'radio',component:RadioformComponent},
      {path:'showradiotests',component:ViewradiotestsComponent},
      {path:'Radiotests',component:ShowradiotestsComponent},
      {path:'Radiotests/:rid',component:ShowradiotestsComponent},
      {path:'Show-Tests', component:FrontpagetestComponent},
      {path:'cardpay',component:CardpayformComponent},
      {path:'showdonations', component:ShowdonationsComponent}

    ]),

    BrowserAnimationsModule
  ],
  providers: [BookingService,DoctorserviceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
