import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-use-icons',
  templateUrl: './use-icons.component.html',
  styleUrls: ['./use-icons.component.scss'],
})
export class UseIconsComponent implements OnInit {
  currentPlayer = 'X' ? 'O' : 'X';
  changePlayer = false;

  arrays = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ];

  ngOnInit() {}

  changeValue(row, index, item) {
    this.changePlayer = !this.changePlayer;

    this.arrays[row][index] = !!item;
  }
}
