import {ChangeDetectorRef, Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ButtonComponent, ButtonTypes} from "./ui/button/button.component";
import {Translate} from "./shared/translate.pipe";
import {TranslateService} from "./shared/services/translate.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonComponent, Translate],
  providers: [TranslateService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chusti';

  constructor(public translateService: TranslateService,
              private ref: ChangeDetectorRef) {
  }

  changeLanguage() {
    this.translateService.changeLanguage();
    this.ref.detectChanges();
  }
}
