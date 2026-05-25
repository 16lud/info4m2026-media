import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-calcula-media',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  templateUrl: './calcula-media.html',
  styleUrls: ['./calcula-media.scss'],
})

export class CalculaMedia {

  protected mediaParcial: number | undefined
  protected avaliacaoFinal: number | undefined
  protected showProvaFinal: boolean = false
  protected mediaFinal: number | undefined

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

    // Garantir que valores inválidos não quebrem o cálculo
    const n1 = isFinite(b1) ? b1 : 0
    const n2 = isFinite(b2) ? b2 : 0
    const n3 = isFinite(b3) ? b3 : 0
    const n4 = isFinite(b4) ? b4 : 0

    // Cálculo ponderado: b1(2), b2(2), b3(3), b4(3)
    this.mediaParcial = parseFloat(((n1 * 2 + n2 * 2 + n3 * 3 + n4 * 3) / 10).toFixed(2))

    // Reset de estados da prova final quando recalculamos
    this.mediaFinal = undefined
    this.showProvaFinal = false
  }

  calcularAvaliacaoFinal() {

    if (this.mediaParcial !== undefined) {

      this.avaliacaoFinal =
        (60 * 2) - this.mediaParcial
    }
  }

  // Verifica se a média parcial já garante aprovação (>= 60)
  isAprovado(): boolean {
    return (this.mediaParcial !== undefined) && (this.mediaParcial >= 60)
  }

  // Exibe o input da prova final quando reprovado
  private checkShowProvaFinal() {
    if (this.mediaParcial !== undefined && this.mediaParcial < 60) {
      this.showProvaFinal = true
    } else {
      this.showProvaFinal = false
    }
  }

  // Calcula a média final após a prova final
  calcularMediaFinal(notaProva: number) {
    const prova = isFinite(notaProva) ? notaProva : 0

    // Regra: média final = (mediaParcial + prova) / 2  (ajuste simples)
    if (this.mediaParcial !== undefined) {
      this.mediaFinal = parseFloat(((this.mediaParcial + prova) / 2).toFixed(2))
    }
  }

  // Verifica aprovação após a prova final (médiaFinal >= 60)
  isFinalAprovado(): boolean {
    return (this.mediaFinal !== undefined) && (this.mediaFinal >= 60)
  }
}