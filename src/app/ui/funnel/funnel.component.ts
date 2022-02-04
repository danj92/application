import { Component, Input, OnInit } from '@angular/core';

export interface Data {
  name: string;
  value: number;
}

export interface DataForFunnel extends Data {
  width: number;
}

@Component({
  selector: 'app-funnel',
  templateUrl: './funnel.component.html',
  styleUrls: ['./funnel.component.scss'],
})
export class FunnelComponent implements OnInit {
  @Input() position: 'start' | 'center' | 'end' = 'start';
  @Input() start: 'withMax' | 'withMin' = 'withMax';

  _data: DataForFunnel[];

  @Input() set data(data: Data[]) {
    const maxValue = Math.max(...data.map(v => v.value));
    const dataWithWidth = data.map(v => {
      const calcWidth = (v.value * 100) / maxValue;
      return { ...v, width: calcWidth };
    });

    if (this.start === 'withMax') {
      this._data = dataWithWidth.sort((a, b) => b.width - a.width);
    } else {
      this._data = dataWithWidth.sort((a, b) => a.width - b.width);
    }
  }

  get data() {
    return this._data;
  }

  ngOnInit(): void {}
}
