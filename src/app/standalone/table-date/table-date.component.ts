import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

@Component({
  selector: 'table-date',
  standalone: true,
  templateUrl: './table-date.component.html',
  styleUrls: ['./table-date.component.scss'],
  imports: [
    DatePipe,
    CommonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableDateComponent implements OnInit {
  @Input() date?: string | Date;
  @Input() inline?: boolean;
  @Input() position: 'start' | 'end' = 'end';

  constructor() {}

  ngOnInit(): void {
    if (typeof this.date == 'string') {
      this.date = new Date(this.date);
    }
  }
}
