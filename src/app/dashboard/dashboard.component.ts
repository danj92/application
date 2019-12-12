import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../interface/request.interface';
import { ApiService } from '../core/api.service';
import { ToastService } from '../core/toast.service';
import { PageOptions } from '../interface/helper.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  requests: Request[];

  allRequests: Request[];

  waiting = false;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private toast: ToastService
  ) { }

  async ngOnInit() {
    this.allRequests = this.route.snapshot.data.allRequests;
    this.requests = this.route.snapshot.data.requests;
  }

  async fetchRequests(data?: PageOptions) {
    this.waiting = true;
    try {
      if (data) {
        this.requests = await this.api.requests.get(data.page, data.limit);
      }
      this.requests = await this.api.requests.get();
    } catch (e) {
      this.toast.error('Failed to load data');
      return false;
    } finally {
      this.waiting = false;
    }

  }
}
