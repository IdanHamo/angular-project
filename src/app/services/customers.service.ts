import { Injectable } from '@angular/core';
import {
  addDoc,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  docData,
  Firestore,
  updateDoc,
} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable, shareReplay } from 'rxjs';
import { Customers } from '../interfaces/customers';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private customersRef: CollectionReference<Required<Customers>>;

  private customers$: Observable<Required<Customers>[]>;

  constructor(private myFireStore: Firestore) {
    this.customersRef = collection(
      this.myFireStore,
      'customers'
    ) as CollectionReference<Required<Customers>>;

    this.customers$ = collectionData(this.customersRef, { idField: 'id' }).pipe(
      shareReplay(1)
    );
  }

  getAll() {
    return this.customers$;
  }
  add(customer: Omit<Customers, 'id'>) {
    return addDoc(this.customersRef, customer);
  }
  remove(id: Customers['id']) {
    const docRef = doc(this.customersRef, id);
    return deleteDoc(docRef);
  }
  getById(id: string) {
    const docRef = doc(this.customersRef, id);
    return docData(docRef, {
      idField: 'id',
    });
  }
  update({ id, ...customer }: Required<Customers>) {
    const docRef = doc(this.customersRef, id);
    return updateDoc(docRef, customer);
  }
}
