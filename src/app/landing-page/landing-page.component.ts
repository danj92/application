import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(private api: ApiService) {}

  async ngOnInit() {
    const people = await this.api.peoples.get('people').toPromise();
    console.log(people);
  }
}
