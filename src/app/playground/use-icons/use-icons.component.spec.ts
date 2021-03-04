import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UseIconsComponent } from './use-icons.component';

describe('UseIconsComponent', () => {
  let component: UseIconsComponent;
  let fixture: ComponentFixture<UseIconsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UseIconsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
