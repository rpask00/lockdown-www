import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'table-date',
  templateUrl: './table-date.component.html',
  styleUrls: ['./table-date.component.scss'],
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
