import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../interface/request.interface';
import { ApiService } from '../core/api.service';
import { ToastService } from '../core/toast.service';
import { PageOptions } from '../interface/helper.interface';
import { FormControl, FormArrayName } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'Id',
    'Request name',
    'Requestor',
    'Good Ending',
    'Description',
    'Need Storyteller Test',
    'Storyteller',
    'Wanted Characters',
    'Deadline',
    'Budget',
    'Status',
  ];

  requests: Request[];

  allRequests: Request[];

  waiting = false;

  toggleIcon = false;

  search = new FormControl();

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private toast: ToastService,
  ) {}

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
      this.requests = await this.api.requests.search(
        this.search.value.toLowerCase(),
      );
    } catch (e) {
      this.toast.error('Failed to load data');
    }
  }

  capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
  }

  createColumnName(column: string) {
    const columnArr = column
      .toLocaleLowerCase()
      .replace(/[^A-Za-z0-9]/g, ' ')
      .split(' ');

    return columnArr.reduce((result, word) => {
      return result + this.capitalizeFirstLetter(word.toLocaleLowerCase());
    });
  }

  async sortColumn(column: string, event) {
    console.log('event', event.target);
    const columnName = this.createColumnName(column);

    this.toggleIcon = !this.toggleIcon;

    if (this.toggleIcon) {
      try {
        this.requests = await this.api.requests.sortASC(columnName);
      } catch (e) {
        this.toast.error(`Failed to sort "${column}"`);
      }
    } else {
      try {
        this.requests = await this.api.requests.sortDESC(columnName);
      } catch (e) {
        this.toast.error(`Failed to sort "${column}"`);
      }
    }
  }
}
