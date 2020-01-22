import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseFormsComponent } from './use-forms.component';

describe('UseFormsComponent', () => {
  let component: UseFormsComponent;
  let fixture: ComponentFixture<UseFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseFormsComponent ]
    })
    .compileComponents();
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
