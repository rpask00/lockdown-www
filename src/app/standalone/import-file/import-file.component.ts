import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {DragDropDirective} from '../../directives/drag-drop.directive';

@Component({
  selector: 'lockdown-import-file',
  templateUrl: './import-file.component.html',
  styleUrls: ['./import-file.component.scss'],
  imports: [
    MatIconModule,
    DragDropDirective
  ],
  standalone: true
})
export class ImportFileComponent implements OnInit {
  @Output() onFilesDrop = new EventEmitter<File[]>();
  @Input() multiple = true;

  @ViewChild('selectFileInput') selectFileInput?: ElementRef<HTMLInputElement>;

  constructor() {
  }

  ngOnInit(): void {
  }

  selectFile() {
    this.selectFileInput?.nativeElement.click();
  }

  droppedFiles(e: any) {
    if (e.target?.files) {
      this.onFilesDrop.emit(e.target?.files);
    }
  }
}
