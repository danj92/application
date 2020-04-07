import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-use-schedule',
  templateUrl: './use-schedule.component.html',
  styleUrls: ['./use-schedule.component.scss']
})
export class UseScheduleComponent implements OnInit {

  @ViewChild('grid', { static: true }) grid: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    const rows = `[tracks] auto [time-0800] 1fr [time-0830] 1fr [time-0900] 1fr [time-0930] 1fr [time-1000] 1fr [time-1030] 1fr [time-1100] 1fr [time-1130] 1fr [time-1200] 1fr`;

    this.renderer.setStyle(this.grid.nativeElement, 'grid-template-rows', rows);
  }

}
