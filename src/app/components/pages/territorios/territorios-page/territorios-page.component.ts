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
      txt_1: 'Para o Programa de Urbanismo Social, a Prefeitura de São Paulo elegeu 4 territórios pilotos: Parque Novo Mundo e Pinheirinho D’água, ambos com um Centro Educacional Unificado (CEU) como equipamento âncora do projeto; Jardim Lapenna e Jardim Pantanal, com a presença de Organizações da Sociedade Civil, no caso, a Fundação Tide Setúbal e Instituto Alana, respectivamente, ambos parceiros do Programa. Os territórios são marcados por situações de vulnerabilidade, apresentando características físicas e sociais distintas, bem como diferentes agentes que atuam em suas respectivas áreas.'
    },
  ];
  images = [
    {
      img_pink: 'assets/images/parque_novo_mundo-contorno.svg',
      txt_pink: 'Parque Novo Mundo',
      img_blue: 'assets/images/lapenna-contorno.svg',
      txt_blue: 'Jardim Lapenna',
      img_orange: 'assets/images/pinheirinho-contorno.svg',
      txt_orange: 'Pinheirinho D água',
      img_yellow: 'assets/images/pantanal-contorno.svg',
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