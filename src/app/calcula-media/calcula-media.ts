import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-calcula-media',
  standalone: true,
  imports: [NgIf],
  providers: [DecimalPipe],
  templateUrl: './calcula-media.html',
  styleUrls: ['./calcula-media.scss'],
})

export class CalculaMedia {

  protected mediaParcial: number | undefined
  protected avaliacaoFinal: number | undefined

  constructor() {
    this.mediaParcial = undefined
    this.avaliacaoFinal = undefined
  }

  calcularMediaParcial(
    b1: number,
    b2: number,
    b3: number,
    b4: number
  ) {

    this.mediaParcial =
      (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10
  }

  calcularAvaliacaoFinal() {

    if (this.mediaParcial !== undefined) {

      this.avaliacaoFinal =
        (60 * 2) - this.mediaParcial
    }
  }
}