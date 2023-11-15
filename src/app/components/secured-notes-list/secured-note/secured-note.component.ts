import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {SecuredNote} from '../../../store/root.state';

@Component({
  selector: 'lockdown-secured-note',
  templateUrl: './secured-note.component.html',
  styleUrls: ['./secured-note.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecuredNoteComponent {
  @Input() securedNote?: SecuredNote;
}
