import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  description =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tempora.';

  constructor() {}

  ngOnInit() {}
}
