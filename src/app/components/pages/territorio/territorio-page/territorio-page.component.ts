import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StickyHoldComponent } from '../../../home/sticky-hold/sticky-hold.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-territorio-page',
  imports: [StickyHoldComponent, NgIf, NgFor, CommonModule],
  templateUrl: './territorio-page.component.html',
  styleUrl: './territorio-page.component.scss'
})
export class TerritorioPageComponent implements OnInit {
  territorios: any[] = [
    {
      id: '1',
      url: 'page-parque-novo-mundo',
      title: 'parque novo mundo',
      img: 'assets/territorios/parque_novo_mundo-1.svg',
      texto_0: 'O Parque Novo Mundo está localizado na zona norte de São Paulo, na subprefeitura Vila Maria/ Vila Guilherme no distrito de Vila Maria. Com área de cerca de 315 hectares, o perímetro de ação contempla uma região com forte presença de infraestrutura voltada para logística e de núcleos de favelas e loteamentos irregulares. Além disso, é atravessado por vias de grande tráfego, como a Marginal Tietê e a Rodovia Presidente Dutra.  O Parque Novo Mundo é um dos três territórios indicados pelo “Pacto pelas Cidades Justas”.',
      texto_1: 'Dentre seus principais desafios, destaca-se a insuficiência na oferta de transporte público e de equipamentos de cultura, além de questões envolvendo habitação e regularização fundiária. Ademais, há poucos espaços verdes e passeios adequados, o que influência na incidência de acidentes viários. Outro problema enfrentado relaciona-se com o descarte irregular de resíduos sólidos, especialmente próximo aos córregos, o que demanda ações de zeladoria urbana e educação ambiental. ',
      texto_2: 'Por outro lado, é onde está localizado o CEU Parque Novo Mundo - Leônidas da Silva, equipamento com potencial para expansão na oferta de serviços à população e atividades voltadas para a cultura e lazer. Ademais, entre as potencialidades, vale ressaltar a presença de outros equipamentos, como o Clube da Comunidade (CDC) Elias da Silva Trindade, a UBS Parque Novo Mundo I e o Serviço Social do Transporte e Serviço Nacional de Aprendizagem do Transporte (SEST/SENAT), além dos equipamentos da rede de ensino municipal. No tocante a mobilidade, há potencial para a expansão da rede cicloviária e melhoria de passeios para a circulação de pedestres.',
      funcao: 'Equipamento Âncora',
      equipe: [
        {
          equipe_txt: 'Parque Novo Mundo:',
          nome: 'CEU Parque Novo Mundo - Leônidas da Silva',
          endereco: 'Av. Ernesto Augusto Lopes, 100 - Parque Vila Maria, São Paulo - SP, 02169-030'
        }
      ],
      mapas: [
        {
          img_0: 'assets/maps/pq-novo-mundo-maps-1.svg',
          img_1: 'assets/maps/pq-novo-mundo-zoneamento.svg',
          img_2: 'assets/maps/pq-novo-mundo-problematica.svg',
          img_3: 'assets/maps/pq-novo-mundo-potencialidades.svg',
          img_4: 'assets/maps/pq-novo-mundo-sintese.svg'
        }
      ],
      carrossel_territorios: [
        {
          img: 'assets/carrosel/pq-novo-mundo/territorio-1.jpg',
          caption: 'Visão aérea do Parque Novo Mundo no entorno do CEU. Fonte: SMSU/DTS/Dronepol'
        },
        {
          img: 'assets/carrosel/pq-novo-mundo/territorio-2.jpg',
          caption: 'Favela da Funerária localizada na Av. Ernesto Augusto Lopes. Fonte: SMUL.'
        },
        {
          img: 'assets/carrosel/pq-novo-mundo/territorio-3.jpg',
          caption: 'Ação de plantio no CEU, junto com a ONG Formigas de Embaúba. Fonte: SUGi/Tuane Fernandes.'
        },
        {
          img: 'assets/carrosel/pq-novo-mundo/territorio-4.jpg',
          caption: 'Entrada do CEU Parque Novo Mundo. Fonte: SECOM.'
        }
      ],
      carrossel_atividades: [
        {
          img: 'assets/carrosel/pq-novo-mundo/acao-1.jpg',
          caption: 'Ativação urbana com a Programação Artística Cultural, promovida pela Secretaria Municipal de Cultura. Fonte: Instituto Baccarelli.'
        },
        {
          img: 'assets/carrosel/pq-novo-mundo/acao-2.jpg',
          caption: 'Criação de murais artísticos por meio do programa de Museu de Arte de Rua, promovida pela Secretaria Municipal de Cultura. Fonte: SMC.'
        },
        {
          img: 'assets/carrosel/pq-novo-mundo/acao-3.jpg',
          caption: 'Ação de plantio no CEU, junto com a ONG Formigas de Embaúba.'
        },
        {
          img: 'assets/carrosel/pq-novo-mundo/acao-4.jpg',
          caption: 'Atendimento móvel'
        },
        {
          img: 'assets/carrosel/pq-novo-mundo/acao-5.jpg',
          caption: 'Unidade de Pronto Atendimento (UPA) inaugurada em julho de 2024. Fonte: Edson Lopes/SECOM.'
        },
        {
          img: 'assets/carrosel/pq-novo-mundo/acao-6.jpg',
          caption: 'Implementação das Bebetecas dentro dos CEUs. Estes são espaços de brincar voltado para famílias com crianças de 0 a 3 anos possibilitando um espaço de convivência e estímulo no desenvolvimento das crianças. Fonte: Paulo Guereta/SECOM.'
        },
        {
          img: 'assets/carrosel/pq-novo-mundo/acao-7.jpg',
          caption: 'Espaço de inclusão digital com acesso livre à internet (Telecentro) e oferta de cursos de capacitação (Avança Tech). Fonte: Equipe de Urbanismo Social.'
        },
        {
          img: 'assets/carrosel/pq-novo-mundo/acao-8.jpg',
          caption: 'Sala pública de cinema, implementadas nos CEUs, por meio da Spcine, empresa de cinema e audiovisual de São Paulo. Fonte: SPCINE/SMC.  '
        }
      ]
    },
    {
      id: '2',
      url: 'page-pinheiro-dagua',
      title: 'pinheirinho d’água',
      img: 'assets/territorios/pinheirinho_dagua-1.svg',
      texto_0: 'O Pinheirinho D’água está localizado na zona noroeste de São Paulo, na subprefeitura Pirituba-Jaraguá no distrito de Jaraguá. Esse território articula um sistema de áreas verdes, composto por remanescente de mata nativa integrados pela Serra da Cantareira, Parque Estadual do Jaraguá, Parque Anhanguera, e Refúgio de Vida Silvestre Anhanguera. Com área de 236 hectares, o perímetro contempla uma região marcada pela topografia acentuada e pela presença de eixos de mobilidade como Rodovia Anhanguera, Bandeirantes e Rodoanel Norte. Em relação a sua ocupação, há núcleos de favelas e loteamentos informais, conjuntos habitacionais, condomínios de classe média e áreas industriais. O Pinheirinho D’água é um dos 3 territórios indicados pelo “Pacto pelas Cidades Justas”',
      texto_1: 'Como dificuldades a serem superadas, salienta-se a mobilidade, tanto entre o perímetro e a cidade, quanto internamente. Nesse tópico, o Parque também se comporta como uma barreira física na circulação leste-oeste de pedestres além do seu horário de funcionamento. Ademais, há uma lata incidência de atropelamentos na Estrada de Taipas devido à sua insuficiência de comporta o alto fluxo de veículos e a deficiência de sinalização de trânsito. Para além desse tema, nota-se acúmulo de resíduos sólidos por descarte irregular e ausência de equipamentos de cultura e lazer, além do CEU.',
      texto_2: 'Em contrapartida, nesse território, está localizado o CEU Pinheirinho - Luís Gama, equipamento educacional com estrutura e oferta de atividades culturais, com potencial para expansão de serviços e atividades oferecidos à população. Entre as potencialidades, há a presença do Parque que pode ser requalificado para atender melhor à população e reforçar o vínculo ambiental.',
      funcao: 'Equipamento Âncora',
      equipe: [
        {
          equipe_txt: 'Pinheirinho D água:',
          nome: 'CEU Luiz Gama - Pinheirinho D água',
          endereco: 'Rua Camillo Zanotti - Jaraguá, São Paulo - SP, 02998-080'
        }
      ],
      mapas: [
        {
          img_0: 'assets/maps/pinheirinho-maps.svg',
          img_1: 'assets/maps/pinheirinho-zoneamento.svg',
          img_2: 'assets/maps/pinheirinho-problematica.svg',
          img_3: 'assets/maps/pinheirinho-potencialidades.svg',
          img_4: 'assets/maps/pinheirinho-sintese.svg'
        }
      ],
      carrossel_territorios: [
        {
          img: 'assets/carrosel/pinheirinho/territorio-1.jpg',
          caption: 'Visão aérea do Pinheirinho D’água no entorno do CEU. Fonte: SMSU/DTS/Dronepol'
        },
        {
          img: 'assets/carrosel/pinheirinho/territorio-2.jpg',
          caption: 'Cruzamento localizado na Estrada de Taipas entre o CEU e o Parque Pinheirinho D’água. Fonte: SMUL.'
        },
        {
          img: 'assets/carrosel/pinheirinho/territorio-3.jpg',
          caption: 'Área de lazer do Parque Pinheirinho D’água. Fonte: SMUL.'
        },
        {
          img: 'assets/carrosel/pinheirinho/territorio-4.jpg',
          caption: 'Córrego de Fogo após a conclusão da obra de canalização desenvolvido pela Secretaria Municipal de Infraestrutura Urbana e Obras (SIURB). Fonte: SMUL.'
        },
        {
          img: 'assets/carrosel/pinheirinho/territorio-5.jpg',
          caption: 'Fachada do Pinheirinho D’água com o anúncio do Circuito Spcine . Fonte: SMUL.'
        }
      ],
      carrossel_atividades: [
        {
          img: 'assets/carrosel/pinheirinho/acao-1.jpg',
          caption: 'Ativação urbana com a Programação Artística Cultural, promovida pela Secretaria Municipal de Cultura. Fonte: SMC.'
        },
        {
          img: 'assets/carrosel/pinheirinho/acao-2.jpg',
          caption: 'Criação de murais artísticos por meio do programa de Museu de Arte de Rua, promovida pela Secretaria Municipal de Cultura. Fonte: SMC.'
        },
        {
          img: 'assets/carrosel/pinheirinho/acao-3.jpg',
          caption: 'Parque Pinheirinho após a conclusão da obra de requalificação, promovida pela Secretaria Municipal do Verde e Meio Ambiente. Fonte: ASCOM/SMUL.'
        },
        {
          img: 'assets/carrosel/pinheirinho/acao-4.jpg',
          caption: 'Parque Pinheirinho após a conclusão da obra de requalificação, promovida pela Secretaria Municipal do Verde e Meio Ambiente. Fonte: ASCOM/SMUL. '
        },
        {
          img: 'assets/carrosel/pinheirinho/acao-5.jpg',
          caption: 'Ativação urbana com a Programação Artística Cultural, promovida pela Secretaria Municipal de Cultura. Fonte: ASCOM/SMUL.'
        },
        {
          img: 'assets/carrosel/pinheirinho/acao-6.jpg',
          caption: 'Ativação urbana com a Programação Artística Cultural, promovida pela Secretaria Municipal de Cultura. Fonte: ASCOM/SMUL'
        },
        {
          img: 'assets/carrosel/pinheirinho/acao-7.jpg',
          caption: ''
        },
        {
          img: 'assets/carrosel/pinheirinho/acao-8.jpg',
          caption: ''
        },
        {
          img: 'assets/carrosel/pinheirinho/acao-9.jpg',
          caption: ''
        }
      ]
    },
    {
      id: '3',
      url: 'page-jardim-lapenna',
      title: 'jardim lapenna',
      img: 'assets/territorios/jardim_lapenna-1.svg',
      texto_0: 'O Jardim Lapenna está localizado na zona leste de São Paulo, na subprefeitura de São Miguel no distrito com mesmo nome.  O perímetro de ação está limitado pela Avenida Jacu-Pêssego, pelo complexo industrial da Nitro Química, pela linha 12 – Safira e Estação de Tratamento de Esgoto de São Miguel (ETE). Com cerca de 55 hectares, essa área é densamente ocupada, incluindo às margens do Córrego Lapenna, com alta presença de núcleos de favelas e loteamentos irregulares. Esse território também se subdivide em Baixo Lapenna I e II, Médio Lapenna e Alto Lapenna, tendo essas parcelas suas particularidades e diferentes níveis de consolidação. O Jardim Lapenna é um dos 3 territórios indicados pelo “Pacto pelas Cidades Justas”.',
      texto_1: 'Entre os principais enfrentamentos, estão postas as ocorrências de alagamentos sazonais, que historicamente acontecem, o que relaciona a ocupação de área de várzea da Bacia do Tietê com a deficiência da infraestrutura de drenagem. Ademais, há uma concentração muito alta de ocupações irregulares no tecido urbano e baixa oferta de equipamentos públicos e áreas verdes. Em relação à conexão entre o Jardim Lapenna e o entorno, vale ressaltar as barreiras físicas como a linha ferroviária, o polo industrial e a Avenida Jacu-Pêssego.',
      texto_2: 'No entanto, há na comunidade entidades locais e organizações da sociedade civil envolvidas na promoção de atividades para a população, como a Tide Setubal e a Sociedade Amigos do Lapenna, or meio do Galpão ZL.  Além disso, há centralidades locais consolidadas em espaços públicos, como o campo de futebol de várzea e a Praça do Forró. No tocante à presença de equipamentos, estão presentes a UBS Jardim Lapenna, equipamentos de ensino da rede municipal e o Parque Vila Jacuí, que podem contribuir para o desenvolvimento socioterritorial local.',
      funcao: 'Equipamento Âncora',
      equipe: [
        {
          equipe_txt: 'Jardim Lapenna:',
          nome: 'Galpão ZL',
          endereco: 'R. Serra da Juruoca, 112 - Jardim Lapena, São Paulo - SP, 08071-180'
        }
      ],
      mapas: [
        {
          img_0: 'assets/maps/lapenna-maps.svg',
          img_1: 'assets/maps/lapenna-zoneamento.svg',
          img_2: 'assets/maps/lapenna-problematica.svg',
          img_3: 'assets/maps/lapenna-potencialidades.svg',
          img_4: 'assets/maps/lapenna-sintese.svg'
        }
      ],
      carrossel_territorios: [
        {
          img: 'assets/carrosel/pinheirinho/territorio-1.jpg',
          caption: 'Visão aérea do Jardim Lapenna próximo da Estação da CPTM de São Miguel Paulista. Fonte: SMSU/DTS/Dronepol.'
        },
        {
          img: 'assets/carrosel/pinheirinho/territorio-2.jpg',
          caption: 'Visão aérea do Jardim Lapenna próximo do Galpão ZL. Fonte: SMSU/DTS/Dronepol.'
        },
        {
          img: 'assets/carrosel/pinheirinho/territorio-3.jpg',
          caption: 'Esquina da Rua Nordestina com Rua Serra da Juroca. Fonte: Equipe de Urbanismo Social.'
        }
      ],
      carrossel_atividades: [
        {
          img: 'assets/carrosel/pinheirinho/acao-1.jpg',
          caption: 'Obras de caminhabilidade. Fonte: Leon Rodrigues/SECOM.'
        },
        {
          img: 'assets/carrosel/pinheirinho/acao-2.jpg',
          caption: 'Obras de caminhabilidade. Fonte: Leon Rodrigues/SECOM.'
        },
        {
          img: 'assets/carrosel/pinheirinho/acao-3.jpg',
          caption: 'Criação de mural artístico na Escola Estadual Prof. Moreira Matos, por meio do programa de Museu de Arte de Rua, promovida pela Secretaria Municipal de Cultura. Fonte: SMC.'
        },
        {
          img: 'assets/carrosel/pinheirinho/acao-4.jpg',
          caption: 'Intervenção artística na quadra, por meio do programa de Museu de Arte de Rua, promovida pela Secretaria Municipal de Cultura. Fonte: SMC.'
        },
        {
          img: 'assets/carrosel/pinheirinho/acao-5.jpg',
          caption: 'Ativação urbana com a Programação Artística Cultural, promovida pela Secretaria Municipal de Cultura. Fonte: SMC.'
        },
        {
          img: 'assets/carrosel/pinheirinho/acao-6.jpg',
          caption: 'Arborização de calçadas, promovida pela Secretaria Municipal do Verde e Meio Ambiente. Fonte: Equipe Urbanismo Social.'
        }
      ]
    },
    {
      id: '4',
      url: 'page-jardim-pantanal',
      title: 'jardim pantanal',
      img: 'assets/territorios/jardim_pantanal-1.svg',
      texto_0: 'O Jardim Pantanal está localizado na zona norte de São Paulo, na subprefeitura de São Miguel no distrito Jardim Helena.  Com cerca de 90 hectares, essa área está localizada na várzea da Bacia do Alto Tietê, fazendo divisa com o município de Guarulhos e entre o Parque Jardim Helena e Parque Biacica. O uso predominante nesse solo é residencial.',
      texto_1: 'Entre os desafios, está posta a alta vulnerabilidade do perímetro, tendo uma média de renda mensal baixa e uma parcela significativa de população sem renda. Para além da esfera econômica, há questões envolvendo moradia e regularização fundiária, falta de equipamentos públicos, acúmulo de resíduos por descarte irregular e oferta deficiente de transporte público. Ademais, devido à sua localização, esse território está sujeito à ocorrência de alagamentos frequentes e com durações distintas, alcançando a marca de 3 meses entre 2009 e 2010.',
      texto_2: 'Entre as potencialidades, há no território entidades locais consolidadas, como o AMOJAP (Associação de Moradores e Amigos do Jardim Pantanal) e o Instinto Alana, sendo este último voltado para a primeira infância, mas também auxilia na mobilização e promoção de ações para toda a comunidade. Ademais, há os Parques, como espaços públicos de integração entre a comunidade e o meio ambiente.',
      funcao: 'Equipamento Âncora',
      equipe: [
        {
          equipe_txt: 'Jardim Pantanal:',
          nome: 'Espaço Alana',
          endereco: 'R. Erva do Sereno, 642 - Jardim Pantanal, São Paulo - SP, 08180-010'
        }
      ],
      mapas: [
        {
          img_0: 'assets/maps/pantanal-maps-1.svg',
          img_1: 'assets/maps/pantanal-zoneamento.svg',
          img_2: 'assets/maps/pantanal-problematica.svg',
          img_3: 'assets/maps/pantanal-potencialidades.svg',
          img_4: 'assets/maps/pantanal-sintese.svg'
        }
      ],
      carrossel_territorios: [
        {
          img: 'assets/carrosel/pantanal/territorio-1.jpg',
          caption: 'Visão aérea do Jardim Pantanal. Fonte: SMSU/DTS/Dronepol '
        },
        {
          img: 'assets/carrosel/pantanal/territorio-2.jpg',
          caption: 'Margens do Rio Tietê, no Jardim Pantanal. Fonte: Equipe de Urbanismo Social.'
        },
        {
          img: 'assets/carrosel/pantanal/territorio-3.jpg',
          caption: 'Visão aérea do Jardim Pantanal, no entorno do Espaço Alana. Fonte: SMSU/DTS/Dronepol'
        },
        {
          img: 'assets/carrosel/pantanal/territorio-4.png',
          caption: 'Rua sem asfalto no Jardim Pantanal. Fonte: SMUL.'
        }
      ],
      carrossel_atividades: [
        {
          img: 'assets/carrosel/pantanal/acao-1.jpg',
          caption: 'Ativação urbana com a Programação Artística Cultural, promovida pela Secretaria Municipal de Cultura com apoio do Espaço Alana. Fonte: SMC.'
        },
        {
          img: 'assets/carrosel/pantanal/acao-2.jpg',
          caption: 'Ativação urbana com a Programação Artística Cultural, promovida pela Secretaria Municipal de Cultura com apoio do Espaço Alana. Fonte: SMC.'
        },
        {
          img: 'assets/carrosel/pantanal/acao-3.jpg',
          caption: 'Ativação urbana com a Programação Artística Cultural, promovida pela Secretaria Municipal de Cultura com apoio do Espaço Alana. Fonte: SMC.'
        },
        {
          img: 'assets/carrosel/pantanal/acao-4.jpg',
          caption: 'Ativação urbana com a Programação Artística Cultural, promovida pela Secretaria Municipal de Cultura com apoio do Espaço Alana. Fonte: SMC.'
        },
        {
          img: 'assets/carrosel/pantanal/acao-5.jpg',
          caption: 'Criação de murais artísticos por meio do programa de Museu de Arte de Rua, promovida pela Secretaria Municipal de Cultura. Fonte: SMC.'
        },
        {
          img: 'assets/carrosel/pantanal/acao-6.jpg',
          caption: 'Artistas locais participaram da criação dos murais artísticos por meio do programa de Museu de Arte de Rua. Fonte: SMC.'
        },
        {
          img: 'assets/carrosel/pantanal/acao-7.jpg',
          caption: 'Criação de mural artístico por meio do programa de Museu de Arte de Rua, promovida pela Secretaria Municipal de Cultura. Fonte: SMC'
        },
        {
          img: 'assets/carrosel/pantanal/acao-8.jpg',
          caption: 'Ação socioambiental no Jardim Pantanal. Fonte: Beatriz Amorim/SGM'
        },
        {
          img: 'assets/carrosel/pantanal/acao-9.jpg',
          caption: 'Obras de saneamento básico na Rua Tietê. Fonte: Equipe Urbanismo Social.'
        },
        {
          img: 'assets/carrosel/pantanal/acao-10.jpg',
          caption: 'Atividade do Cine clube, exibição de filmes seguido de debate. Fonte: Instituto Alana.'
        },
        {
          img: 'assets/carrosel/pantanal/acao-11.jpg',
          caption: 'Inauguração da Unidades de Pronto Atendimento 24 horas, no Jardim Helena. Fonte: Guereta/SECOM.'
        },
        {
          img: 'assets/carrosel/pantanal/acao-12.jpg',
          caption: 'Inauguração da Unidades de Pronto Atendimento 24 horas, no Jardim Helena. Fonte: Guereta/SECOM.'
        },
        {
          img: 'assets/carrosel/pantanal/acao-13.jpg',
          caption: ''
        }
      ]
    }
  ];

  territorio: any;
  currentPage: number = 0;
  totalSlides: number = 20;
  currentIndex: number = 0;
  intervalId: any;
  currentSlide: number = 0;
  
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
    this.startAutoSlide();
  }

  get paginatedSlides() {
    if (!this.territorio?.carrossel_atividades) return [];

    const start = this.currentPage * this.totalSlides;
    return this.territorio.carrossel_atividades.slice(start, start + this.totalSlides);
  }

  nextPage() {
    if ((this.currentPage + 1) * this.totalSlides < this.territorio.carrossel_atividades.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  get firstVisibleIndex(): number {
    return this.currentPage * this.totalSlides + 1;
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 1000000);
  }
  
  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
  
  nextSlide() {
    if (!this.territorio || !this.territorio.mapas || this.territorio.mapas[0].length === 0) return;
    const totalSlides = Object.keys(this.territorio.mapas[0]).length;
    this.currentSlide = (this.currentSlide + 1) % totalSlides;
  }
  
  prevSlide() {
    if (!this.territorio || !this.territorio.mapas || this.territorio.mapas[0].length === 0) return;
    const totalSlides = Object.keys(this.territorio.mapas[0]).length;
    this.currentSlide = (this.currentSlide - 1 + totalSlides) % totalSlides;
  }

}
