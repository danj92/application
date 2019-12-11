import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../interface/request.interface';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  requests: Request[];

  allRequests: Request[];

  constructor(private route: ActivatedRoute, private api: ApiService) { }

  async ngOnInit() {
    this.allRequests = this.route.snapshot.data.requests;
    this.requests = await this.api.requests.get();
  }

  async fetchRequests(data: any) {
    this.requests = await this.api.requests.get(data.page, data.limit);
    console.log(this.requests);
  }
}
