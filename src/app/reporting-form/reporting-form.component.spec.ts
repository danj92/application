import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingFormComponent } from './reporting-form.component';

describe('ReportingFormComponent', () => {
  let component: ReportingFormComponent;
  let fixture: ComponentFixture<ReportingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
