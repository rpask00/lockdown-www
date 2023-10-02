import {Component} from '@angular/core';
import {CardColor, SecuredNote} from '../store/root.state';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'lockdown-secured-notes-list',
  templateUrl: './secured-notes-list.component.html',
  styleUrls: ['./secured-notes-list.component.scss']
})
export class SecuredNotesListComponent {
  readonly securedNotesLoading$ = of(false);
  readonly securedNotes$: Observable<SecuredNote[]> = of([
    {
      id: '1',
      title: 'My First Note',
      note: 'This is my first note',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      color: CardColor.RED,
      attachments: [
        {
          id: '1',
          name: 'My First Attachment',
          size: 100
        },
        {
          id: '2',
          name: 'My Second Attachment',
          size: 100
        },
        {
          id: '3',
          name: 'My Third Attachment',
          size: 100
        },
        {
          id: '4',
          name: 'My Fourth Attachment',
          size: 100
        }
      ]
    },
    {
      id: '1',
      title: 'My First Note',
      note: 'This is my first note',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      color: CardColor.BLUE,
      attachments: [
        {
          id: '1',
          name: 'My First Attachment',
          size: 100
        }
      ]
    },
    {
      id: '1',
      title: 'My First Note',
      note: 'This is my first note',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      color: CardColor.GREEN,
      attachments: [
        {
          id: '1',
          name: 'My First Attachment',
          size: 100
        }
      ]
    },
    {
      id: '1',
      title: 'My First Note',
      note: 'This is my first note',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      color: CardColor.ORANGE,
      attachments: [
        {
          id: '1',
          name: 'My First Attachment',
          size: 100
        }
      ]
    },
    {
      id: '1',
      title: 'My First Note',
      note: 'This is my first note',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      color: CardColor.ORANGE,
      attachments: [
        {
          id: '1',
          name: 'My First Attachment',
          size: 100
        }
      ]
    },
    {
      id: '1',
      title: 'My First Note',
      note: 'This is my first note',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      color: CardColor.RED,
      attachments: [
        {
          id: '1',
          name: 'My First Attachment',
          size: 100
        }
      ]
    },
    {
      id: '1',
      title: 'My First Note',
      note: 'This is my first note',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      color: CardColor.BLUE,
      attachments: [
        {
          id: '1',
          name: 'My First Attachment',
          size: 100
        }
      ]
    },
    {
      id: '1',
      title: 'My First Note',
      note: 'This is my first note',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      color: CardColor.GREEN,
      attachments: [
        {
          id: '1',
          name: 'My First Attachment',
          size: 100
        }
      ]
    },
    {
      id: '1',
      title: 'My First Note',
      note: 'This is my first note',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      color: CardColor.ORANGE,
      attachments: [
        {
          id: '1',
          name: 'My First Attachment',
          size: 100
        }
      ]
    },
    {
      id: '1',
      title: 'My First Note',
      note: 'This is my first note',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      color: CardColor.ORANGE,
      attachments: [
        {
          id: '1',
          name: 'My First Attachment',
          size: 100
        }
      ]
    }
  ]);
}
