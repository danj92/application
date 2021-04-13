import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() numberOFelements;
  @Input() howMuchPagesToShow = 5;
  @Output() selectedPage = new EventEmitter();

  pages = [];

  limitElement = 10;

  constructor() {}

  ngOnInit(): void {
    this.pages = Array.from({ length: 5 }, (_, i) => i + 1);
  }

  selectPage(value) {
    this.selectedPage.emit(value);
  }

  previous() {
    let previous;

    const newArr = [];

    this.pages.forEach(v => {
      if (v !== '') {
        previous = v;
      }
      if (v === '') {
        newArr.push(previous + 1);
      } else {
        newArr.push(v - 5);
      }
    });

    this.pages = newArr;
  }

  next() {
    this.pages = this.pages.map(a => {
      const test = a + 5;

      if (test > 13) {
        return '';
      } else {
        return a + 5;
      }
    });

    // if (this.pages.includes(13)) {
    //   const index = this.pages.findIndex(v => v === 13);

    //   this.pages = this.pages.slice(0, index + 1);
    // }
  }
}
