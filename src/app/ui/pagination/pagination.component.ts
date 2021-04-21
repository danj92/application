import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Pages {
  pagination: number[];
  currentPage: number;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  _numberOfItems;

  @Input() set numberOfItems(value: number) {
    this._numberOfItems = value;
    this.pages = this.createPagination(this.currentPage);
  }

  get numberOfItems() {
    return this._numberOfItems;
  }

  @Input() articlesPerPage = 1;
  @Input() currentPage = 1;
  @Input() numberOfButtons: number;
  @Input() singlePagePagination = false;
  @Output() changePage = new EventEmitter();

  numberOfPages: number;

  threeDotsLeft = false;
  threeDotsRight = false;

  numbersOfPagesInLeftSide: number;

  pages: Pages;

  ngOnInit() {
    this.pages = this.createPagination(this.currentPage);
  }

  createPagination = currentPage => {
    this.currentPage = currentPage;
    const fetchCurrentPageObj = {
      currentPage,
      articlesPerPage: this.articlesPerPage,
    };
    this.changePage.emit(fetchCurrentPageObj);

    this.numberOfPages = Math.ceil(this.numberOfItems / this.articlesPerPage);

    if (currentPage > this.numberOfPages || currentPage < 1)
      return {
        pagination: [],
        currentPage,
      };

    const buttons = Array(this.numberOfPages)
      .fill(1)
      .map((e, i) => e + i);

    // default pagination, show all pages
    if (!this.numberOfButtons) {
      this.numberOfButtons = this.numberOfPages;
    }

    // pagination on one page
    if (this.singlePagePagination) {
      this.numberOfButtons = 1;
    }

    const sideButtons = this.calcSideButtons();

    const calculLeft = (rest = 0) => {
      const pagesLeft = buttons
        .slice(0, currentPage - 1)
        .reverse()
        .slice(0, sideButtons + rest)
        .reverse();

      this.numbersOfPagesInLeftSide = pagesLeft.length;

      if (buttons.slice(0, currentPage - 1).length > pagesLeft.length) {
        if (this.numberOfButtons >= buttons.length || this.singlePagePagination) {
          this.threeDotsLeft = false;
        } else {
          this.threeDotsLeft = true;
        }
      } else {
        this.threeDotsLeft = false;
      }

      return {
        array: pagesLeft,
        rest() {
          return sideButtons - this.array.length;
        },
      };
    };

    const calculRight = (rest = 0) => {
      const pagesRight = buttons.slice(currentPage).slice(0, sideButtons + rest);

      if (pagesRight.slice(-1)[0] < this.numberOfPages) {
        this.threeDotsRight = true;
      } else {
        this.threeDotsRight = false;
      }

      return {
        array: pagesRight,
        rest() {
          return sideButtons - this.array.length;
        },
      };
    };

    const leftButtons = calculLeft(calculRight().rest()).array;
    const rightButtons = calculRight(calculLeft().rest()).array;

    return {
      pagination: [...leftButtons, currentPage, ...rightButtons],
      currentPage,
    };
  };

  goToPage(currentPage) {
    this.pages = this.createPagination(currentPage);
  }

  gotToFirst() {
    this.pages = this.createPagination(1);
  }

  gotToLast() {
    this.pages = this.createPagination(this.numberOfPages);
  }

  next() {
    if (this.numberOfPages === this.currentPage) {
      return;
    }

    const sideButtons = this.calcSideButtons();

    if (this.currentPage === 1 + this.numbersOfPagesInLeftSide) {
      this.pages = this.createPagination(
        this.pages.pagination.length + 1 + sideButtons,
      );
    } else {
      const activeCurrentPage =
        sideButtons + this.currentPage + this.numbersOfPagesInLeftSide + 1;

      if (activeCurrentPage > this.numberOfPages) {
        this.pages = this.createPagination(this.numberOfPages);
      } else {
        this.pages = this.createPagination(activeCurrentPage);
      }
    }
  }

  back() {
    if (this.currentPage === 1) {
      return;
    }

    const sideButtons = this.calcSideButtons();

    if (this.numberOfPages - sideButtons <= this.currentPage) {
      let activeCurrentPage: number;

      if (sideButtons !== 1) {
        activeCurrentPage = this.numberOfPages - sideButtons * (sideButtons + 1) - 1;
      } else {
        activeCurrentPage = this.numberOfPages - sideButtons * (sideButtons + 1) - 2;
      }

      this.pages = this.createPagination(activeCurrentPage);
    } else {
      const activeCurrentPage =
        this.currentPage - this.numbersOfPagesInLeftSide - sideButtons - 1;
      if (activeCurrentPage < 1) {
        this.pages = this.createPagination(1);
      } else {
        this.pages = this.createPagination(activeCurrentPage);
      }
    }
  }

  calcSideButtons() {
    return this.numberOfButtons % 2 === 0
      ? this.numberOfButtons / 2
      : (this.numberOfButtons - 1) / 2;
  }
}
