import { Pipe, PipeTransform } from '@angular/core';
import { Customers } from '../interfaces/customers';

@Pipe({
  name: 'customersFilter',
})
export class CustomersFilterPipe implements PipeTransform {
  transform(
    value: Required<Customers>[] | null,
    property: keyof Required<Customers>,
    term: string
  ): Required<Customers>[] | null {
    if (!value) {
      return null;
    }

    return value.filter((customer) =>
      customer[property]?.toLowerCase().includes(term.toLowerCase())
    );
  }
}
