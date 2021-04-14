import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

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
  @Input() numberOfArticles: number;
  @Input() articlesPerPage = 5;
  @Input() currentPage = 1;
  @Input() numberOfButtons = 3;
  @Input() singlePagePagination = false;

  numberOfPages: number;

  threeDotsLeft = false;
  threeDotsRight = false;

  numberOfPagesInLeftSide: number;

  pages: Pages;

  ngOnInit() {
    this.pages = this.createPagination(this.currentPage);
  }

  createPagination = currentPage => {
    this.currentPage = currentPage;

    this.numberOfPages = Math.ceil(this.numberOfArticles / this.articlesPerPage);

    if (currentPage > this.numberOfPages || currentPage < 1)
      return {
        pagination: [],
        currentPage,
      };

    const buttons = Array(this.numberOfPages)
      .fill(1)
      .map((e, i) => e + i);

    const sideButtons =
      this.numberOfButtons % 2 === 0
        ? this.numberOfButtons / 2
        : (this.numberOfButtons - 1) / 2;

    const calculLeft = (rest = 0) => {
      const pagesLeft = buttons
        .slice(0, currentPage - 1)
        .reverse()
        .slice(0, sideButtons + rest)
        .reverse();

      this.numberOfPagesInLeftSide = pagesLeft.length;

      if (pagesLeft[0] > 1) {
        this.threeDotsLeft = true;
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
    const sideButtons =
      this.numberOfButtons % 2 === 0
        ? this.numberOfButtons / 2
        : (this.numberOfButtons - 1) / 2;

    if (this.currentPage === 1 + this.numberOfPagesInLeftSide) {
      this.pages = this.createPagination(
        this.pages.pagination.length + 1 + sideButtons,
      );
    } else {
      const test = sideButtons + this.currentPage + this.numberOfPagesInLeftSide + 1;

      if (test > this.numberOfPages) {
        this.pages = this.createPagination(this.numberOfPages);
      } else {
        this.pages = this.createPagination(test);
      }
    }
  }

  back() {
    const sideButtons =
      this.numberOfButtons % 2 === 0
        ? this.numberOfButtons / 2
        : (this.numberOfButtons - 1) / 2;

    const test = this.currentPage - this.numberOfPagesInLeftSide - sideButtons - 1;

    if (test < 1) {
      this.pages = this.createPagination(1);
    } else {
      this.pages = this.createPagination(test);
    }
  }
}
