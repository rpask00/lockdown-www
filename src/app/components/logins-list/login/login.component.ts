import {ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Login} from '../../../store/root.state';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'lockdown-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  @ViewChild('itemIcon') itemIcon?: ElementRef<HTMLImageElement>;
  @Input() login?: Login;

  constructor(private _toastrService: ToastrService) {}

  get linked_website() {
    if (this.login?.linked_websites && this.login?.linked_websites?.length > 0) {
      return this.login?.linked_websites[0];
    }
    return '';
  }

  get target_website() {
    let linked_website = this.linked_website;
    if (!linked_website?.includes('http://') && !linked_website?.includes('https://')) {
      if (!linked_website?.includes('www.')) {
        linked_website = 'www.' + linked_website;
      }
      linked_website = 'https://' + linked_website;
    }
    return linked_website;
  }

  goToWebsite() {
    window.open(this.target_website, '_blank');
  }

  loadingFaviconError() {
    if (this.itemIcon) {
      this.itemIcon.nativeElement.src = 'assets/not-found.png';
    }
  }

  showSuccess(message: string, title: string = '') {
    this._toastrService.success(message, title);
  }
}
