import { Component } from '@angular/core';
import { StickyHoldComponent } from "../../home/sticky-hold/sticky-hold.component";
import { NgFor } from '@angular/common';
import { title } from 'process';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LetreiroComponent } from "../../letreiro/letreiro.component";

@Component({
  selector: 'app-about',
  imports: [StickyHoldComponent, NgFor, LetreiroComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  apresentacao = [
    {
      txt_1: 'O urbanismo social é uma estratégia de intervenção urbana que, a partir da articulação das políticas públicas municipais, urbanização de espaços públicos livres e participação social, tem como principal objetivo a qualificação de territórios com altos índices vulnerabilidade e a promoção de espaços acolhedores, resilientes e seguros, de modo a reduzir as desigualdades socioespaciais no município.', 
      txt_2: 'Os projetos são únicos, elaborados para atender as necessidades particulares diagnosticadas em cada território. Eles passam por diversas fases, tendo início com a construção de um Diagnóstico Técnico-Participativo e Plano de Ação, resultando em projetos de intervenção de espaços públicos e na implementação das políticas públicas integradas no território.',
      txt_3: 'Para o Programa de Urbanismo Social, a Prefeitura de São Paulo elegeu quatro territórios pilotos: Parque Novo Mundo e Pinheirinho D’água, ambos com um Centro Educacional Unificado (CEU) como equipamento âncora do projeto; Jardim Lapenna e Jardim Pantanal, com a presença de Organizações da Sociedade Civil, no caso, a Fundação Tide Setubal e Instituto Alana, respectivamente, ambos parceiros do Programa.'
    },
  ];

  eixos=[
    {
      title: 'eixo de atuação',
      img: 'assets/images/EIXOS.svg',
      alt: 'Eixos de atuação',
      list: [
        {txt: '01. cidadania'},
        {txt: '02. oportunidade'},
        {txt: '03. sustentabilidade'},
        {txt: '04. moradia'}
      ]
    }
  ];

  video: { title: string; video: SafeResourceUrl; type: string }[] = [];
  constructor(private sanitizer: DomSanitizer) {
    this.video = [
      {
        title: 'vídeo institucional',
        video: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/s9Jw5XrDdy8?si=yJKbj8Qk-APQJrEN'),
        type: 'video/youtube'
      }
    ];
  }
}
