import {Component, OnInit} from '@angular/core';
import { BehaviorSubject, map} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {CommonModule} from '@angular/common';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'lockdown-password-generator',
  standalone: true,
  templateUrl: './password-generator.component.html',
  imports: [
    MatExpansionModule,
    MatProgressBarModule,
    CommonModule,
    ClipboardModule,
    MatSliderModule,
    MatCheckboxModule,
    FormsModule
  ],
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent implements OnInit {
  public useLetters: boolean = true;
  public useDigits: boolean = false;
  public useSpecialCharacters: boolean = false;

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    this.generatePassword();
  }

  readonly defaultPasswordLength = 16;

  public password$ = new BehaviorSubject<string>('');
  public passwordStrength$ = this.password$.pipe(map(this.__calculatePasswordStrength));
  readonly MAX_PASSWORD_STRENGTH = 9;

  private __calculatePasswordStrength(password: string) {
    let score = 0;

    // Check password length
    if (password.length < 8) {
      score -= 1;
    } else if (password.length >= 8 && password.length <= 11) {
      score += 1;
    } else {
      score += 2;
    }

    // Check character types
    if (/[a-z]/.test(password)) {
      score += 1;
    }
    if (/[A-Z]/.test(password)) {
      score += 1;
    }
    if (/\d/.test(password)) {
      score += 1;
    }
    if (/[!@#$%^&*]/.test(password)) {
      score += 2;
    }

    // Check for common patterns
    if (!/(password|12345|qwerty)/i.test(password)) {
      score += 2;
    }
    return score;
  }

  generatePassword(e?: Event) {
    const length = e ? (e.target as HTMLInputElement).valueAsNumber : this.defaultPasswordLength;

    let password = '';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const special = '!@#$%^&*';

    const chars =
      letters.repeat(this.useLetters ? 1 : 0) +
      numbers.repeat(this.useDigits ? 4 : 0) +
      special.repeat(this.useSpecialCharacters ? 6 : 0);

    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    this.password$.next(password);
  }

  passwordCopied() {
    this.toastr.info('Password copied to clipboard');
  }
}
