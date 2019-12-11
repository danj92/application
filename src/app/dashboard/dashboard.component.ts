import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../interface/request.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  requests: Request[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.requests = this.route.snapshot.data.requests;
    console.log(this.requests);
  }
}
