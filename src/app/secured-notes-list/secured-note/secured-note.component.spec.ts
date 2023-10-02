import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SecuredNoteComponent} from './secured-note.component';

describe('SecuredNoteComponent', () => {
  let component: SecuredNoteComponent;
  let fixture: ComponentFixture<SecuredNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecuredNoteComponent]
    });
    fixture = TestBed.createComponent(SecuredNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
