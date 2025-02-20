import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarrosselComponent } from "../carrossel/carrossel.component";

@Component({
  selector: 'app-main-content',
  imports: [NgFor, RouterModule, CarrosselComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  block=[
    {
      title: 'território',
      text: 'O projeto piloto de Urbanismo Social em São Paulo contempla quatro áreas específicas, chamadas de territórios piloto. Esses territórios são delimitados dentro de regiões específicas da cidade, o que permite testar e avaliar propostas integradas em escala urbana reduzida. Os territórios definidos são o Parque Novo Mundo, Pinheirinho D’água, Jardim Lapenna e Jardim Pantanal. São marcados por situações de vulnerabilidade, apresentando características físicas e sociais distintas, bem como diferentes agentes que atuam em suas respectivas áreas.'
    }
  ];

  blocks = [
    {
      title: 'programa',
      text: 'O urbanismo social é uma estratégia de intervenção urbana que, a partir da articulação das políticas públicas municipais, urbanização de espaços públicos livres e participação social, tem como principal objetivo a qualificação de territórios com altos índices de vulnerabilidade e a promoção de espaços acolhedores, resilientes e seguros, de modo a reduzir as desigualdades socioespaciais no município.'
    }
  ];

  images_territories = [
    { territorio_orange: 'Parque Novo Mundo', img_orange: 'assets/territorios/parque_novo_mundo-1.svg' },
    { territorio_pink: 'Pinheirinho d’água', img_pink: 'assets/territorios/pinheirinho_dagua-1.svg' },
    { territorio_blue: 'Jardim Lapenna', img_blue: 'assets/territorios/jardim_lapenna-1.svg' },
    { territorio_yellow: 'Jardim Pantanal', img_yellow: 'assets/territorios/jardim_pantanal-1.svg' },
  ];

  carouselImages = [
    { src: 'assets/images/parceiro_1.svg', alt: 'Image 1' },
    { src: 'assets/images/parceiro_2.svg', alt: 'Image 2' },
    { src: 'assets/images/parceiro_3.svg', alt: 'Image 3' },
    { src: 'assets/images/parceiro_4.svg', alt: 'Image 4' },
    { src: 'assets/images/parceiro_5.svg', alt: 'Image 5' },
    { src: 'assets/images/parceiro_6.svg', alt: 'Image 6' },
    { src: 'assets/images/parceiro_7.svg', alt: 'Image 7' },
    { src: 'assets/images/parceiro_9.svg', alt: 'Image 9' },
  ];

  constructor() {
    this.carouselImages = [...this.carouselImages, ...this.carouselImages];
  }
}
