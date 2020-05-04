import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseButtonsComponent } from './use-buttons.component';

describe('UseButtonsComponent', () => {
  let component: UseButtonsComponent;
  let fixture: ComponentFixture<UseButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UseButtonsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
