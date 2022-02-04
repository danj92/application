import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-funnel',
  templateUrl: './use-funnel.component.html',
  styleUrls: ['./use-funnel.component.scss'],
})
export class UseFunnelComponent implements OnInit {
  data = [
    {
      name: 'Name 19 Name 19 Name 19 Name 19 Name 19 Name 19 Name 19 Name 19 Name 19',
      value: 6000,
    },
    {
      name: 'Name 12',
      value: 5,
    },
    {
      name: 'Name 12',
      value: 12,
    },
    {
      name: 'Name 8',
      value: 8,
    },
    {
      name: 'Name 0',
      value: 0,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
