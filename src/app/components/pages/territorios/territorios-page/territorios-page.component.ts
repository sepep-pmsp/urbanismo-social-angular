import { Component, OnInit } from '@angular/core';
import { StickyHoldComponent } from '../../../home/sticky-hold/sticky-hold.component';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-territorios-page',
  imports: [StickyHoldComponent, NgFor, HttpClientModule, RouterModule],
  templateUrl: './territorios-page.component.html',
  styleUrl: './territorios-page.component.scss'

})
export class TerritoriosPageComponent {
  repeatCount = 10;

  apresentation = [
    {
      txt_1: 'O projeto piloto de Urbanismo Social em São Paulo contempla quatro áreas específicas, chamadas de territórios piloto. Esses territórios são delimitados dentro de regiões específicas da cidade, o que permite testar e avaliar propostas integradas em escala urbana reduzida. Os territórios definidos são o Parque Novo Mundo, Pinheirinho D’água, Jardim Lapenna e Jardim Pantanal. São marcados por situações de vulnerabilidade, apresentando características físicas e sociais distintas, bem como diferentes agentes que atuam em suas respectivas áreas.'
    },
  ];
  images = [
    {
      img_pink: 'assets/territorios/parque_novo_mundo-contorno.svg',
      txt_pink: 'Parque Novo Mundo',
      img_blue: 'assets/territorios/lapenna-contorno.svg',
      txt_blue: 'Jardim Lapenna',
      img_orange: 'assets/territorios/pinheirinho-contorno.svg',
      txt_orange: 'Pinheirinho D água',
      img_yellow: 'assets/territorios/pantanal-contorno.svg',
      txt_yellow: 'Jardim Pantanal'
    }
  ];

  territorio: any = {};
  territorios = [
    {
      id: '1',
      url: 'page-parque-novo-mundo',
      title: 'Parque Novo Mundo',
    },
    {
      id: '2',
      url: 'page-pinheiro-dagua',
      title: 'Pinheirinho D’água',
    },
    {
      id: '3',
      url: 'page-jardim-lapenna',
      title: 'Jardim Lapenna',
    },
    {
      id: '4',
      url: 'page-jardim-pantanal',
      title: 'Jardim Pantanal',
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const url: string | null = this.route.snapshot.paramMap.get('url');
    console.log('URL parameter:', url);
    if (url) {
      const foundTerritory = this.territorios.find(t => t.url === url);
      if (foundTerritory) {
        this.territorio = foundTerritory;
      }
    }
  }
}