import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <app-header-page
      title="page not found"
      description="the page does not found"
      icon="bi bi-exclamation-lg"
    ></app-header-page>
  `,
  styles: [],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
