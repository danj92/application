import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-tooltip',
  templateUrl: './use-tooltip.component.html',
  styleUrls: ['./use-tooltip.component.scss'],
})
export class UseTooltipComponent implements OnInit {
  description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsam esse nobis excepturi doloremque consequuntur delectus aut consequatur maiores quos?';

  constructor() {}

  ngOnInit(): void {}
}
