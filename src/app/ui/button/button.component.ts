import {Component, Input} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {NgIf} from "@angular/common";

export enum ButtonTypes {
  BASIC = '',
  PRIMARY = 'primary',
  WARN = 'warn'

}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    NgIf
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text = '';
  @Input() icon = '';
  @Input() iconOnly = false;
  @Input() appearance: ButtonTypes = ButtonTypes.BASIC;
  @Input() isDisabled = false;


}
