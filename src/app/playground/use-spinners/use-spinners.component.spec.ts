import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseSpinnersComponent } from './use-spinners.component';

describe('UseSpinnersComponent', () => {
  let component: UseSpinnersComponent;
  let fixture: ComponentFixture<UseSpinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UseSpinnersComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseSpinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
