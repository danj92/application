import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UseTabsComponent } from './use-tabs.component';

describe('UseTabsComponent', () => {
  let component: UseTabsComponent;
  let fixture: ComponentFixture<UseTabsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UseTabsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
