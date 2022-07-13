import { Component, OnInit } from '@angular/core';
import { Contacts } from 'src/app/interfaces/contacts';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contacts: Contacts[] = [];
  input = '';
  constructor(private contactService: ContactsService) {
    this.contacts = this.contactService.getContacts();
  }

  ngOnInit(): void {}
}
