import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SimpleMenuComponent } from './simple-menu.component';

describe('SimpleMenuComponent', () => {
  let component: SimpleMenuComponent;
  let fixture: ComponentFixture<SimpleMenuComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SimpleMenuComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
