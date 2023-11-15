import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SecuredNoteDetailsComponent} from './secured-note-details.component';

describe('SecuredNoteDetailsComponent', () => {
  let component: SecuredNoteDetailsComponent;
  let fixture: ComponentFixture<SecuredNoteDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecuredNoteDetailsComponent]
    });
    fixture = TestBed.createComponent(SecuredNoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
