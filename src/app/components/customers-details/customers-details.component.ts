import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CustomersService } from 'src/app/services/customers.service';
import { Customers } from '../../interfaces/customers';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.scss'],
})
export class CustomersDetailsComponent implements OnInit {
  customer$: Observable<Required<Customers>>;

  constructor(
    private customersService: CustomersService,
    private activatedRoute: ActivatedRoute
  ) {
    this.customer$ = this.activatedRoute.params.pipe(
      switchMap((param) => this.customersService.getById(param['id']))
    );
  }

  ngOnInit(): void {}
}
