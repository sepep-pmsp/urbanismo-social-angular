import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  splint_svg = [
    { imgSrc: 'assets/images/logo_fundo_preto.svg' },
  ];
  img_prefei = [
    { prefeitura: 'assets/images/GOVERNO_HORIZONTAL_PB_NEGATIVO.png' }
  ];

  list_principal=[
    {txt : 'início', link: '/'},
    {txt : 'sobre nós', link: '/sobre'},
    {txt : 'territórios', link: ''},
    {txt : 'eventos', link: ''},
    {txt : 'acervo', link: ''},
  ];

  list_secundary = [
    {txt2 : 'notícias', link: ''},
    {txt2 : 'governaça', link: ''},
    {txt2 : 'parceiros', link: ''},
    {txt2 : 'marcos institucionais', link: ''},
    {txt2 : 'órgãos colegiados', link: ''},
  ]

  adresse = [
    { adress:'Viaduto do Chá, 15 - Centro Histórico de São Paulo, São Paulo - SP, 01007-040' },
    { email:'urbanismosocial@prefeitura.sp.gov.br' },
    { tele:'0800-175717' }
  ];

  img_negativo= [
    { imgs: 'assets/images/elementoApoio_03_PB_Negativo.svg', class: 'rede', },
  ];

  links_rede = [
    { img: 'assets/images/Instagram.svg', link: 'https://www.instagram.com/prefeitura_sao_paulo/', class:'social' },
    { img: 'assets/images/Facebook.svg', link: 'https://www.facebook.com/PrefeituraSaoPaulo', class:'social' },
    { img: 'assets/images/YouTube.svg', link: 'https://www.instagram.com/prefeitura_sao_paulo/', class:'social' },
    { img: 'assets/images/TwitterX.svg', link: 'https://twitter.com/PrefeituraSP', class:'social' },
  ];
}
