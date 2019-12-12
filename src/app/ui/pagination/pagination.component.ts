import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { Event } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  _allItems: any[];

  DEBOUNCE_TIME = 300;

  pages = [];

  currentPage = 1;

  goToPage = new FormControl(1);

  @Output() paginate = new EventEmitter();

  @Input() limit: number;

  @Input() set allItems(allItems) {
    this._allItems = allItems;
  }

  get allItems() {
    return this._allItems;
  }

  get pageCount() {
    return this.allItems ? Math.ceil(this.allItems.length / this.limit) : 0;
  }

  constructor() {}

  ngOnInit() {
    this.pages = [...Array(this.pageCount)];

    this.goToPage.valueChanges
      .pipe(debounceTime(this.DEBOUNCE_TIME), distinctUntilChanged())
      .subscribe(page => {
        console.log(page);
        this.currentPage = page;
        this.calculatePages(page);
      });
  }

  calculatePages(page: number) {
    console.log('calculatePages');
    this.paginate.next({ page, limit: this.limit });
  }
}
