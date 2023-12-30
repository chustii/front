import {ChangeDetectorRef, OnInit, Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from "./services/translate.service";

@Pipe({
  name: 'translate',
  standalone: true
})
export class Translate implements PipeTransform, OnInit {
  constructor(private translateService: TranslateService,
              private changeDetectorRef: ChangeDetectorRef) {
  }
  transform(value: string, currentLang?: string) {
    return this.translateService.getText(value);
  }

  ngOnInit() {
    this.translateService.languageChanged.subscribe(() => {
      this.changeDetectorRef.markForCheck(); // Trigger change detection
    });
  }

}
