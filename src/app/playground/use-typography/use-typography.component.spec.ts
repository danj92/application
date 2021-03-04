import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UseTypographyComponent } from './use-typography.component';

describe('UseTypographyComponent', () => {
  let component: UseTypographyComponent;
  let fixture: ComponentFixture<UseTypographyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UseTypographyComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
