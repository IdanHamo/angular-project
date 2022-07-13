import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { CustomersComponent } from './components/customers/customers.component';
import { NewCustomersComponent } from './components/new-customers/new-customers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'customers',
        pathMatch: 'full',
      },
      {
        path: 'customers',
        component: CustomersComponent,
      },
      {
        path: 'customers/new',
        component: NewCustomersComponent,
      },
      {
        path: 'customers/:id',
        component: CustomersDetailsComponent,
      },
      {
        path: 'customers/:id/edit',
        component: CustomersEditComponent,
      },
      {
        path: 'contacts',
        component: ContactComponent,
      },
    ],
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
