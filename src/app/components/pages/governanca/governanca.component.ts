import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StickyHoldComponent } from "../../home/sticky-hold/sticky-hold.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-governanca',
  imports: [RouterModule, StickyHoldComponent, NgFor, NgIf],
  templateUrl: './governanca.component.html',
  styleUrl: './governanca.component.scss'
})
export class GovernancaComponent {
  repeatCount = 10;

  contents = [
    {
      section: 1,
      title: 'Marcos Institucionais',
      content: 'Os marcos institucionais são estruturas, normas, regras e convenções que orientam o comportamento e a organização de instituições em uma sociedade. Esses marcos estabelecem os limites e as diretrizes para o funcionamento de organizações e sistemas, como governos, empresas, ONGs e outros atores coletivos. Eles são fundamentais para a coordenação de ações e para a manutenção de ordem e estabilidade em diferentes contextos.'
    },
    {
      section: 2,
      title_h2: 'Órgãos Colegiados',
      laws: [
        {
          title: 'PORTARIA SECRETARIA DE GOVERNO MUNICIPAL - SGM Nº 184 DE 7 DE JULHO DE 2020',
          link:'https://legislacao.prefeitura.sp.gov.br/leis/portaria-secretaria-de-governo-municipal-sgm-184-de-7-de-julho-de-2020',
          text: 'Indica servidores para integrar a Comissão Responsável pela Análise e Recebimento da Doação referente ao Termo de Doação nº 01/2020 celebrado entre a SMDU e as entidades Fundação Tide Setúbal, Instituto dos Arquitetos do Brasil - Departamento de São Paulo e BEI Comunicação Ltda.',
          img_law: 'assets/icons/UrbanismoSocial_ElementoApoio_02_Rosa.svg'
        },
        {
          title: 'PORTARIA SECRETARIA DE GOVERNO MUNICIPAL - SGM Nº 126 DE 27 DE JULHO DE 2023',
          link:'https://legislacao.prefeitura.sp.gov.br/leis/portaria-secretaria-de-governo-municipal-sgm-126-de-27-de-julho-de-2023',
          text: 'Institui a Comissão Intersecretarial do Programa de Urbanismo Social da Prefeitura de São Paulo.',
          img_law: 'assets/icons/UrbanismoSocial_ElementoApoio_02_Amarelo.svg'
        },
        {
          title: 'PORTARIA SECRETARIA DE GOVERNO MUNICIPAL - SGM Nº 6 DE 9 DE JANEIRO DE 2024',
          link:'https://legislacao.prefeitura.sp.gov.br/leis/portaria-secretaria-de-governo-municipal-sgm-6-de-9-de-janeiro-de-2024',
          text: 'Designa servidores para integrar o Núcleo Técnico da Comissão Intersecretarial do Programa de Urbanismo Social.',
          img_law: 'assets/icons/UrbanismoSocial_ElementoApoio_02_Laranja.svg'
        },
        {
          title: 'PORTARIA SECRETARIA MUNICIPAL DE HABITAÇÃO - SEHAB Nº 18 DE 8 DE FEVEREIRO DE 2024',
          link:'https://legislacao.prefeitura.sp.gov.br/leis/portaria-secretaria-municipal-de-habitacao-sehab-18-de-8-de-fevereiro-de-2024',
          text: 'Dispõe sobre o processo de eleição dos membros do Conselho Gestor do perímetro do Jardim Pantanal e dá outras providências.',
          img_law: 'assets/icons/UrbanismoSocial_ElementoApoio_02_Lilas.svg'
        },
        {
          title: 'PORTARIA SECRETARIA MUNICIPAL DE HABITAÇÃO - SEHAB Nº 72 de 20 de Julho de 2024',
          link:'https://legislacao.prefeitura.sp.gov.br/leis/portaria-secretaria-municipal-de-habitacao-sehab-72-de-20-de-julho-de-2024/consolidado',
          text: 'Constitui Conselho Gestor, da Zona Especial de Interesse Social - ZEIS 1 - Jardim Pantanal, referente ao Jardim Pantanal, situado no Distrito Subprefeitura de São Miguel Paulista, localizado nessa Capital, São Paulo.',
          img_law: 'assets/icons/UrbanismoSocial_ElementoApoio_02_Azul.svg'
        }
      ]
    },
    {
      section: 3,
      title_h3: 'Programa de Metas 21/24',
      images: [
        { src: 'assets/parceiros/PdM_2124_LOGO_Circular_Azul-Amarelo-1.svg', alt: 'PDM logo circular azul e amarelo do plano de metas', class: 'image-item' },
        { src: 'assets/images/meta.jpg', alt: 'Meta 2', class: 'meta' },
      ]
    },
    {
      section: 4,
      txt_list_0: 'governança institucional',
      img_curv_com: 'assets/icons/UrbanismoSocial_ElementoApoio_04_Amarelo.svg',
      txt_title2_01: 'Comissão Intersecretarial do Programa de Urbanismo Social',
      list_0: [
        'SMC', 'SMS', 'SME', 'SEME', 'SMSU', 'SVMA', 'SMSUB', 'SMT',
      ],
      list_1:[
        'SIURB', 'SEHAB', 'SMDET', 'SMADS', 'SMDHC', 'SMPED', 'SMIT'
      ],
      txt_title2_02: 'Coordenação',
      content_box_txt_1: 'SGM',
      box_txt_1: '(Institucional)',
      content_box_txt_2: 'SMUL',
      box_txt_2: '(Técnica)',
      img_curv_coop: 'assets/icons/UrbanismoSocial_ElementoApoio_04_Laranja.svg',
      txt_list_1: 'Cooperação',
      list_2: [
        'Comunitas', 'Fundação Tide Setúbal', 'Instituto Alana', 'Insper',
        'Diagonal/Fundação', 'Tellescom', 'Instituto Baccarelli', 'CAU/BR',
        'Pacto Pelas Cidades Justas', 'C40'
      ],
      img_curv_par: 'assets/icons/UrbanismoSocial_ElementoApoio_04_Azul.svg',
      title_4: 'Parceiros Institucionais',
      txt_title_4: 'Ade Sampa; SP Obras; SP Urbanismo; SP Cine; SP Regula; SP Parcerias; CET; Fundação Paulistana'
    },
    {
      section: 5,
      txt_btn: 'Saiba mais sobre nossos parceiros'
    }
  ];

  learnMore(): void {
    console.log('Saiba mais sobre nossos parceiros!');
  }
}
