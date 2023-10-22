import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[dragDrop]'
})
export class DragDropDirective {
  @Output() files: EventEmitter<File[]> = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  @HostListener('dragover', ['$event']) public onDragOver(evt: DragEvent) {
    this.elementRef.nativeElement.style.backgroundColor = 'rgba(63, 106, 216, 0.20)';
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent) {
    this.elementRef.nativeElement.style.backgroundColor = 'rgba(63, 106, 216, 0.05)';
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();

    let files: File[] = [];
    if (evt.dataTransfer) {
      for (let i = 0; i < evt.dataTransfer.files.length; i++) {
        files.push(evt.dataTransfer.files[i]);
      }
      if (files.length > 0) {
        this.files.emit(files);
      }
    }
  }
}
