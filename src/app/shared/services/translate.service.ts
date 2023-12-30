import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {textsEn} from "../../../text/en";
import {textsKa} from "../../../text/ka";

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  public currentLanguage = 'en';
  public languageChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  public changeLanguage() {
    if (this.currentLanguage === 'en') {
      this.currentLanguage = 'ka';
    } else {
      this.currentLanguage = 'en';
    }
    this.languageChanged.emit();
  }

  getText(key: string) {
    if (this.currentLanguage === 'en') {
      return textsEn.get(key) || '';
    }
    return textsKa.get(key) || '';
  }

}
