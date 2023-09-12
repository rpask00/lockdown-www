import { ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'loader-transparent-container',
  templateUrl: './loader-transparent.component.html',
  styleUrls: ['./loader-transparent.component.scss']
})
export class LoaderTransparentComponent implements OnDestroy {
  @Input() extraClass: string = '';
  @Input() size: number = 100;

  private _isLoadingSub?: Subscription;

  @Input() set loading(isLoading: boolean | Observable<boolean> | Promise<boolean>) {
    if (isLoading instanceof Observable) {
      this._isLoadingSub = isLoading.subscribe(loading => {
        this._loading = loading;
        this._detector.detectChanges();
      });
    } else if (isLoading instanceof Promise) {
      isLoading.then(loading => {
        this._loading = loading;
        this._detector.detectChanges();
      });
    } else {
      this._loading = isLoading;
    }
  }

  get isLoading(): boolean {
    return this._loading;
  }

  private _loading: boolean = true;

  constructor(private _detector: ChangeDetectorRef) { }

  ngOnDestroy(): void {
    if (this._isLoadingSub) {
      this._isLoadingSub.unsubscribe();
    }
  }
}
