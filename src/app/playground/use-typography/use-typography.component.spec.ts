import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseTypographyComponent } from './use-typography.component';

describe('UseTypographyComponent', () => {
  let component: UseTypographyComponent;
  let fixture: ComponentFixture<UseTypographyComponent>;

  beforeEach(async(() => {
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
