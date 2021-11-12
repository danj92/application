import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMatChipListComponent } from './custom-mat-chip-list.component';

describe('CustomMatChipListComponent', () => {
  let component: CustomMatChipListComponent;
  let fixture: ComponentFixture<CustomMatChipListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMatChipListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMatChipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
