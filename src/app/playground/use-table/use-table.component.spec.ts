import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UseTableComponent } from './use-table.component';

describe('UseTableComponent', () => {
  let component: UseTableComponent;
  let fixture: ComponentFixture<UseTableComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UseTableComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
