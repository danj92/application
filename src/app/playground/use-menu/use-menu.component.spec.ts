import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseMenuComponent } from './use-menu.component';

describe('UseMenuComponent', () => {
  let component: UseMenuComponent;
  let fixture: ComponentFixture<UseMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
