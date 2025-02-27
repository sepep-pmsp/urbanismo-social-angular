import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-letreiro',
  imports: [NgFor],
  templateUrl: './letreiro.component.html',
  styleUrl: './letreiro.component.scss'
})
export class LetreiroComponent {
  repeatCount = 40;
  @Input() titulo: string = '';
}