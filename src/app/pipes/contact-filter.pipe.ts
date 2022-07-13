import { Pipe, PipeTransform } from '@angular/core';
import { Contacts } from '../interfaces/contacts';

@Pipe({
  name: 'contactFilter',
})
export class ContactFilterPipe implements PipeTransform {
  transform(
    value: Contacts[] | null,
    property: keyof Omit<Contacts, 'phones' | 'birthday'>,
    term: string
  ): Contacts[] | null {
    if (!value) {
      return null;
    }

    return value.filter((contact) =>
      contact[property]?.toLowerCase().includes(term.toLowerCase())
    );
  }
}
