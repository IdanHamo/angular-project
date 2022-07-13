import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from 'src/app/interfaces/customers';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers$: Observable<Required<Customers>[]>;

  input = '';

  constructor(private customersService: CustomersService) {
    this.customers$ = this.customersService.getAll();
  }

  remove(id: string) {
    if (confirm('Are you sure you want to delete?')) {
      this.customersService.remove(id);
    }
  }

  search(phone: string) {}

  ngOnInit(): void {}
}
