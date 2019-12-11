import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  _allItems: any[];

  pages = [];

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

  constructor() { }

  ngOnInit() {
    this.pages = [...Array(this.pageCount)];
  }

  calculatePages(page: number) {
    this.paginate.next({ page, limit: this.limit });
  }

}
