import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  DEBOUNCE_TIME = 300;

  pages = [];

  currentPage = 1;

  _allItems: any[];

  goToPage = new FormControl(1, Validators.min(1));

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

    this.goToPage.valueChanges
      .pipe(
        filter(i => i > 0),
        debounceTime(this.DEBOUNCE_TIME),
        distinctUntilChanged())
      .subscribe(page => {
        this.currentPage = page;
        this.calculatePages(page);
      });
  }

  calculatePages(page: number) {
    this.paginate.next({ page, limit: this.limit });
  }

  leaveInput() {
    if (this.goToPage.value === '' || this.goToPage.value === '0') {
      this.goToPage.setValue(1);
    }
  }
}
