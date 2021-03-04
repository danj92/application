import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UseMenuComponent } from './use-menu.component';

describe('UseMenuComponent', () => {
  let component: UseMenuComponent;
  let fixture: ComponentFixture<UseMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UseMenuComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
