import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from 'src/app/interfaces/customers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-new-customers',
  templateUrl: './new-customers.component.html',
  styleUrls: ['./new-customers.component.scss'],
})
export class NewCustomersComponent implements OnInit {
  form: Customers = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  async onSubmit({ valid }: NgForm) {
    if (valid) {
      await this.customersService.add(this.form);
      this.routerService.navigate(['..'], { relativeTo: this.activatedRoute });
    }
  }
  reset(customerForm: NgForm) {
    customerForm.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
  }

  constructor(
    private customersService: CustomersService,
    private routerService: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
