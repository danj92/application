import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UseFormsComponent } from './use-forms.component';

describe('UseFormsComponent', () => {
  let component: UseFormsComponent;
  let fixture: ComponentFixture<UseFormsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UseFormsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
