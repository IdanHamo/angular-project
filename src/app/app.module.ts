import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomersComponent } from './components/customers/customers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderPageComponent } from './utilities/header-page/header-page.component';
import { NewCustomersComponent } from './components/new-customers/new-customers.component';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { CustomersFilterPipe } from './pipes/customers-filter.pipe';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignWithGoogleDirective } from './directives/sign-with-google.directive';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { SignOutDirective } from './directives/sign-out.directive';
import { ContactFilterPipe } from './pipes/contact-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ContactComponent,
    CustomersComponent,
    PageNotFoundComponent,
    HeaderPageComponent,
    NewCustomersComponent,
    LoginComponent,
    CustomersFilterPipe,
    DashboardComponent,
    SignWithGoogleDirective,
    CustomersDetailsComponent,
    CustomersEditComponent,
    ContactFilterPipe,
    SignOutDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
