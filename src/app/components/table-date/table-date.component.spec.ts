import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableDateComponent} from './table-date.component';

describe('TableDateComponent', () => {
  let component: TableDateComponent;
  let fixture: ComponentFixture<TableDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableDateComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
