import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UseButtonsComponent } from './use-buttons.component';

describe('UseButtonsComponent', () => {
  let component: UseButtonsComponent;
  let fixture: ComponentFixture<UseButtonsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UseButtonsComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UseButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
