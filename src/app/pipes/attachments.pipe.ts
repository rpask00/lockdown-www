import {Pipe, PipeTransform} from '@angular/core';
import {Attachment} from '../store/root.state';

@Pipe({
  name: 'attachments'
})
export class AttachmentsPipe implements PipeTransform {
  transform(attachments: Attachment[], ...args: unknown[]): string {
    return attachments.map((attachment, i) => `${i + 1}. ${attachment.name}`).join(', ');
  }
}
