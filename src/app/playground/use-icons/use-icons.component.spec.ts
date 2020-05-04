import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseIconsComponent } from './use-icons.component';

describe('UseIconsComponent', () => {
  let component: UseIconsComponent;
  let fixture: ComponentFixture<UseIconsComponent>;

  beforeEach(async(() => {
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
