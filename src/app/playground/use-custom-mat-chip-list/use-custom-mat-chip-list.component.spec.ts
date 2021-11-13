import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCustomMatChipListComponent } from './use-custom-mat-chip-list.component';

describe('UseCustomMatChipListComponent', () => {
  let component: UseCustomMatChipListComponent;
  let fixture: ComponentFixture<UseCustomMatChipListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseCustomMatChipListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCustomMatChipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
