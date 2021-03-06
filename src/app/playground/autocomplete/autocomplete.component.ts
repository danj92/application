import { HttpClient } from '@angular/common/http';
import {
  Component,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
// import { FormControl } from '@angular/forms';

import { fromEvent, merge, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements AfterViewInit {
  DEBOUNCE_TIME = 500;

  isLoading = false;

  lists;

  URL_PATH = 'http://localhost:3000/';

  @Output() public selectOutput = new EventEmitter<string>();

  // autocomplete = new FormControl();

  // subscription = new Subscription();

  // searchChangeObserver;

  private subscription: Subscription;

  @ViewChild('searchInput')
  input: ElementRef;

  constructor(private http: HttpClient, private renderer: Renderer2) {}

  // ngOnInit(): void {
  // this.subscription.add(
  //   this.autocomplete.valueChanges
  //     .pipe(debounceTime(this.DEBOUNCE_TIME), distinctUntilChanged())
  //     .subscribe(value => {
  //       if (value.length === 0) {
  //         this.lists = [];
  //       }
  //       this.fetchData(value);
  //     }),
  // );
  // }

  ngAfterViewInit() {
    const keyup$ = fromEvent<any>(this.input.nativeElement, 'keyup').pipe(
      map(event => {
        return event.target.value;
      }),
      debounceTime(this.DEBOUNCE_TIME),
      distinctUntilChanged(),
    );

    const paste$ = fromEvent<any>(this.input.nativeElement, 'paste').pipe(
      map(event => {
        return event.clipboardData.getData('text').toLowerCase();
      }),
    );

    const allEvents$ = merge(keyup$, paste$);

    allEvents$.subscribe(value => {
      if (value.length === 0) {
        this.lists = [];
        return;
      }
      this.fetchData(value);
    });
  }

  get<T>(url: string, params: any = {}): Promise<T> {
    return this.http.get<T>(`${this.URL_PATH}${url}?q=${params}`).toPromise();
  }

  async fetchData(value: string) {
    if (!!value && value.length > 0) {
      try {
        this.isLoading = true;
        this.lists = await this.get('items', value);
        this.isLoading = false;
      } catch (e) {
        throw new Error('Error');
      }
    }
  }

  select(event) {
    this.selectOutput.next(event.srcElement.innerText);
    this.lists = [];
    this.renderer.setProperty(
      this.input?.nativeElement,
      'value',
      event.srcElement.innerText,
    );
  }

  // inputValue(searchValue: string) {
  //   if (!this.searchChangeObserver) {
  //     new Observable(observer => {
  //       this.searchChangeObserver = observer;
  //     })
  //       .pipe(debounceTime(500), distinctUntilChanged(), startWith(''))
  //       .subscribe(value => console.log('value', value));
  //   }
  //   this.searchChangeObserver.next(searchValue);
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
