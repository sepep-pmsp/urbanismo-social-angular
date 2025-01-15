import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { url } from 'inspector';

@Component({
  selector: 'app-territorio-page',
  imports: [NgIf],
  templateUrl: './territorio-page.component.html',
  styleUrl: './territorio-page.component.scss'
})
export class TerritorioPageComponent implements OnInit {
  territorios: any[] = [
    {
      id: '1',
      url: 'page-parque-novo-mundo',
      title: 'Parque Novo Mundo',
      img: 'assets/images/parque_novo_mundo-1.svg',
      texto_0: 'O Parque Novo Mundo está localizado na zona norte de São Paulo...',
      texto_1: 'Dentre seus principais desafios, destaca-se a insuficiência...',
      texto_2: 'Por outro lado, é onde está localizado o CEU Parque Novo Mundo...',
      equipe_txt: 'Parque Novo Mundo:',
      equipe: [
        {
          'funcao': 'Equipamento Âncora',
          'nome': 'CEU Parque Novo Mundo - Leônidas da Silva',
          'endereco': 'Av. Ernesto Augusto Lopes, 100 - Parque Vila Maria, São Paulo - SP, 02169-030'
        }
      ],
      mapas: [
        {
          'img_0': 'assets/images/MAPA02_Perímetro-Pq_Novo_Mundo.svg',
          'img_1': 'assets/images/MAPA06_PROBLEMÁTICAS-PARQUE_NOVO_MUNDO.svg',
          'img_2': 'assets/images/MAPA07_POTENCIALIDADES-PARQUE_NOVO_MUNDO.svg',
          'img_3': 'assets/images/FASE-01-NOVO_MUNDO_page-0001.svg',
          'img_4': 'assets/images/FASE-01-NOVO_MUNDO_page-0002.svg'
        }
      ]
    },
    {
      id: '2',
      url: 'page-pinheiro-dagua',
      title: 'Pinheirinho D’água',
      img: 'assets/images/pinheirinho_dagua-1.svg',
      texto_0: 'O Pinheirinho D’água está localizado na zona noroeste de São Paulo...',
      texto_1: 'Como dificuldades a serem superadas, salienta-se a mobilidade...',
      texto_2: 'Em contrapartida, nesse território, está localizado o CEU Pinheirinho...',
      equipe_txt: 'Pinheirinho D água:',
      equipe: [
        {
          'funcao': 'Equipamento Âncora',
          'nome': 'CEU Luiz Gama - Pinheirinho D água',
          'endereco': 'Rua Camillo Zanotti - Jaraguá, São Paulo - SP, 02998-080'
        }
      ],
      mapas: [
        {
          img_0: 'assets/images/MAPA03_Perímetro-Pinheirinho_DÁgua.svg',
          img_1: 'assets/images/MAPA09_PROBLEMÁTICAS-PINHEIRINHODAGUA.svg',
          img_2: 'assets/images/MAPA10_POTENCIALIDADES-PINHEIRINHODAGUA.svg',
          img_3: 'assets/images/FASE-01-PINHEIRINHO_page-0001.svg',
          img_4: 'assets/images/FASE-01-PINHEIRINHO_page-0002.svg'
        }
      ]
    },
    {
      id: '3',
      url: 'page-jardim-lapenna',
      title: 'Jardim Lapenna',
      img: 'assets/images/jardim_lapenna-1.svg',
      texto_0: 'O Jardim Lapenna está localizado na zona leste de São Paulo...',
      texto_1: 'Entre os principais enfrentamentos, estão postas as ocorrências...',
      texto_2: 'No entanto, há na comunidade entidades locais e organizações...',
      equipe_txt: 'Jardim Lapenna:',
      equipe: [
        {
          funcao: 'Equipamento Âncora',
          nome: 'Galpão ZL',
          endereco: 'R. Serra da Juruoca, 112 - Jardim Lapena, São Paulo - SP, 08071-180'
        }
      ],
      mapas: [
        {
          img_0: 'assets/images/MAPA04_Perímetro-Jd_Lapenna.svg',
          img_1: 'assets/images/MAPA12_PROBLEMÁTICAS-JARDIM_LAPENNA.svg',
          img_2: 'assets/images/MAPA13_POTENCIALIDADES-JARDIM_LAPENNA.svg',
          img_3: 'assets/images/lapenna-mapa-4.svg',
          img_4: 'assets/images/FASE-01-LAPENNA_page-0002.svg'
        }
      ]
    },
    {
      id: '4',
      url: 'page-jardim-pantanal',
      title: 'Jardim Pantanal',
      img: 'assets/images/jardim_pantanal-1.svg',
      texto_0: 'O Jardim Pantanal está localizado na zona norte de São Paulo...',
      texto_1: 'Entre os desafios, está posta a alta vulnerabilidade...',
      texto_2: 'Entre as potencialidades, há no território entidades locais...',
      equipe_txt: 'Jardim Pantanal:',
      equipe: [
        {
          funcao: 'Equipamento Âncora',
          nome: 'Espaço Alana',
          endereco: 'R. Erva do Sereno, 642 - Jardim Pantanal, São Paulo - SP, 08180-010'
        }
      ],
      mapas: [
        {
          img_0: 'assets/images/MAPA05_Perímetro-Jd_Pantanal.svg',
          img_1: 'assets/images/MAPA15_PROBLEMÁTICAS-JARDIM_PANTANAL.svg',
          img_2: 'assets/images/MAPA16_POTENCIALIDADES-JARDIM_PANTANAL.svg',
          img_3: 'assets/images/FASE-01-PANTANAL_page-0001',
          img_4: 'assets/images/FASE-01-PANTANAL_page-0002.svg'
        }
      ]
    }
  ];

  territorio: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const url: string | null = this.route.snapshot.paramMap.get('url');
    console.log('URL parameter:', url); 
    if (url) {
      const foundTerritory = this.territorios.find(t => t.url === url);
      if (foundTerritory) {
        this.territorio = foundTerritory;
        console.log('Territory data:', foundTerritory);
      } else {
        console.error('Território não encontrado!');
      }
    } else {
      console.error('URL não encontrada!');
    }
  }
}
