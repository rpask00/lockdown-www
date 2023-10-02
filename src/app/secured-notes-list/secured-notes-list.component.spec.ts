import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SecuredNotesListComponent} from './secured-notes-list.component';

describe('SecuredNotesListComponent', () => {
  let component: SecuredNotesListComponent;
  let fixture: ComponentFixture<SecuredNotesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecuredNotesListComponent]
    });
    fixture = TestBed.createComponent(SecuredNotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
