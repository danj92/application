import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../interface/request.interface';
import { ApiService } from '../core/api.service';
import { ToastService } from '../core/toast.service';
import { PageOptions } from '../interface/helper.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  requests: Request[];

  allRequests: Request[];

  waiting = false;

  search = new FormControl();

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private toast: ToastService,
  ) { }

  get haveRequests() {
    return this.requests.length !== 0;
  }

  async ngOnInit() {
    this.allRequests = this.route.snapshot.data.allRequests;
    this.requests = this.route.snapshot.data.requests;
    this.fetchRequests();
  }

  async fetchRequests(data?: PageOptions) {
    this.waiting = true;
    try {
      if (data) {
        this.requests = await this.api.requests.get(data.page, data.limit);
      } else {
        this.requests = await this.api.requests.get();
      }
    } catch (e) {
      this.toast.error('Failed to load data');
      return false;
    } finally {
      this.waiting = false;
    }
  }

  async searchRequests() {
    try {
      this.requests = await this.api.requests.search(this.search.value.toLowerCase(), 5);
    } catch (e) {
      this.toast.error('Failed to load data');
    }
  }
}
