import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ResponsivenessService {
  private _isTabletOnly$ = new ReplaySubject<boolean>();
  isTabletOnly$ = this._isTabletOnly$.asObservable().pipe(distinctUntilChanged());

  private _isTabletOrBelow$ = new ReplaySubject<boolean>();
  isTabletOrBelow$ = this._isTabletOrBelow$.asObservable().pipe(distinctUntilChanged());

  private _isMobile$ = new ReplaySubject<boolean>();
  isMobile$ = this._isMobile$.asObservable().pipe(distinctUntilChanged());

  private _isDesktop$ = new ReplaySubject<boolean>();
  isDesktop$ = this._isDesktop$.asObservable().pipe(distinctUntilChanged());

  private _isSmartphone$ = new ReplaySubject<boolean>();
  isSmartphone$ = this._isSmartphone$.asObservable().pipe(distinctUntilChanged());

  private _isTabletOrAbove$ = new ReplaySubject<boolean>();
  isTabletOrAbove$ = this._isTabletOrAbove$.asObservable().pipe(distinctUntilChanged());

  constructor() {
    window.addEventListener('resize', () => {
      this.checkResolution();
    });
    this.checkResolution();
  }

  get isMobile() {
    return window.innerWidth <= 1024;
  }

  get isDesktop() {
    return window.innerWidth > 1024;
  }

  get isTabletOrAbove() {
    return window.innerWidth >= 768;
  }

  get isTabletOrBelow() {
    return window.innerWidth <= 767;
  }

  get isSmartphone() {
    return window.innerWidth <= 468;
  }

  get isTabletOnly() {
    return window.innerWidth <= 768 && window.innerWidth > 468;
  }

  checkResolution() {
    this._isTabletOrBelow$.next(this.isTabletOrBelow);
    this._isMobile$.next(this.isMobile);
    this._isDesktop$.next(this.isDesktop);
    this._isSmartphone$.next(this.isSmartphone);
    this._isTabletOrAbove$.next(this.isTabletOrAbove);
    this._isTabletOnly$.next(this.isTabletOnly);
  }
}
