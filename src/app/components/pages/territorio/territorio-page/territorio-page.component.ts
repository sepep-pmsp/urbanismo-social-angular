import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StickyHoldComponent } from "../../../home/sticky-hold/sticky-hold.component";
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
      img: 'assets/images/parque_novo_mundo-1.svg',
      texto_0: 'O Parque Novo Mundo está localizado na zona norte de São Paulo, na subprefeitura Vila Maria/ Vila Guilherme no distrito de Vila Maria. Com área de cerca de 315 hectares, o perímetro de ação contempla uma região com forte presença de infraestrutura voltada para logística e de núcleos de favelas e loteamentos irregulares. Além disso, é atravessado por vias de grande tráfego, como a Marginal Tietê e a Rodovia Presidente Dutra.  O Parque Novo Mundo é um dos 3 territórios indicados pelo “Pacto pelas Cidades Justas”.',
      texto_1: 'Dentre seus principais desafios, destaca-se a insuficiência na oferta de transporte público e de equipamentos de cultura, além de questões envolvendo habitação e regularização fundiária. Ademais, há poucos espaços verdes e passeios adequados, o que influência na incidência de acidentes viários. Outro problema enfrentado relaciona-se com o descarte irregular de resíduos sólidos, especialmente próximo aos córregos, o que demanda ações de zeladoria urbana e educação ambiental.',
      texto_2: 'Por outro lado, é onde está localizado o CEU Parque Novo Mundo - Leônidas da Silva, equipamento com potencial para expansão na oferta de serviços à população e atividades voltadas para a cultura e lazer. Ademais, entre as potencialidades, vale ressaltar a presença de outros equipamentos, como o Clube da Comunidade (CDC) Elias da Silva Trindade, a UBS Parque Novo Mundo I e o Serviço Social do Transporte e Serviço Nacional de Aprendizagem do Transporte (SEST/SENAT), além dos equipamentos da rede de ensino municipal. No tocante a mobilidade, há potencial para a expansão da rede cicloviária e melhoria de passeios para a circulação de pedestres. ',
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
          img_0: 'assets/images/MAPA02_Perímetro-Pq_Novo_Mundo.svg',
          img_1: 'assets/images/MAPA06_PROBLEMÁTICAS-PARQUE_NOVO_MUNDO.svg',
          img_2: 'assets/images/MAPA07_POTENCIALIDADES-PARQUE_NOVO_MUNDO.svg',
          img_3: 'assets/images/FASE-01-NOVO_MUNDO_page-0001.svg',
          img_4: 'assets/images/FASE-01-NOVO_MUNDO_page-0002.svg'
        }
      ]
    },
    {
      id: '2',
      url: 'page-pinheiro-dagua',
      title: 'pinheirinho d’água',
      img: 'assets/images/pinheirinho_dagua-1.svg',
      texto_0: 'O Pinheirinho D’água está localizado na zona noroeste de São Paulo, na subprefeitura Pirituba-Jaraguá no distrito de Jaraguá. Esse território articula um sistema de áreas verdes, composto por remanescente de mata nativa integrados pela Serra da Cantareira, Parque Estadual do Jaraguá, Parque Anhanguera, e Refúgio de Vida Silvestre Anhanguera. Com área de 236 hectares, o perímetro contempla uma região marcada pela topografia acentuada e pela presença de eixos de mobilidade como Rodovia Anhanguera, Bandeirantes e Rodoanel Norte. Em relação a sua ocupação, há núcleos de favelas e loteamentos informais, conjuntos habitacionais, condomínios de classe média e áreas industriais. O Pinheirinho D’água é um dos 3 territórios indicados pelo “Pacto pelas Cidades Justas”.',
      texto_1: 'Como dificuldades a serem superadas, salienta-se a mobilidade, tanto entre o perímetro e a cidade, quanto internamente. Nesse tópico, o Parque também se comporta como uma barreira física na circulação leste-oeste de pedestres além do seu horário de funcionamento. Ademais, há uma lata incidência de atropelamentos na Estrada de Taipas devido à sua insuficiência de comportar o alto fluxo de veículos e a deficiência de sinalização de trânsito. Para além desse tema, nota-se acúmulo de resíduos sólidos por descarte irregular e ausência de equipamentos de cultura e lazer, além do CEU.',
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
      title: 'jardim lapenna',
      img: 'assets/images/jardim_lapenna-1.svg',
      texto_0: 'O Jardim Lapenna está localizado na zona leste de São Paulo, na subprefeitura de São Miguel no distrito com mesmo nome. O perímetro de ação está limitado pela Avenida Jacu-Pêssego, pelo complexo industrial da Nitro Química, pela linha 12 – Safira e Estação de Tratamento de Esgoto de São Miguel (ETE). Com cerca de 55 hectares, essa área é densamente ocupada, incluindo às margens do Córrego Lapenna, com alta presença de núcleos de favelas e loteamentos irregulares. Esse território também se subdivide em Baixo Lapenna I e II, Médio Lapenna e Alto Lapenna, tendo essas parcelas suas particularidades e diferentes níveis de consolidação. O Jardim Lapenna é um dos 3 territórios indicados pelo “Pacto pelas Cidades Justas”.',
      texto_1: 'Entre os principais enfrentamentos, estão postas as ocorrências de alagamentos sazonais, que historicamente acontecem, o que relaciona a ocupação de área de várzea da Bacia do Tietê com a deficiência da infraestrutura de drenagem. Ademais, há uma concentração muito alta de ocupações irregulares no tecido urbano e baixa oferta de equipamentos públicos e áreas verdes. Em relação à conexão entre o Jardim Lapenna e o entorno, vale ressaltar as barreiras físicas como a linha ferroviária, o polo industrial e a Avenida Jacu-Pêssego.',
      texto_2: 'No entanto, há na comunidade entidades locais e organizações da sociedade civil envolvidas na promoção de atividades para a população, como a Tide Setubal e a Sociedade Amigos do Lapenna, por meio do Galpão ZL. Além disso, há centralidades locais consolidadas em espaços públicos, como o campo de futebol de várzea e a Praça do Forró. No tocante à presença de equipamentos, estão presentes a UBS Jardim Lapenna, equipamentos de ensino da rede municipal e o Parque Vila Jacuí, que podem contribuir para o desenvolvimento socioterritorial local.',
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
          img_0: 'assets/images/MAPA04_Perímetro-Jd_Lapenna.svg',
          img_1: 'assets/images/MAPA12_PROBLEMÁTICAS-JARDIM_LAPENNA.svg',
          img_2: 'assets/images/MAPA13_POTENCIALIDADES-JARDIM_LAPENNA.svg',
          img_3: 'assets/images/FASE-01-LAPENNA_page-0001.svg',
          img_4: 'assets/images/FASE-01-LAPENNA_page-0002.svg'
        }
      ]
    },
    {
      id: '4',
      url: 'page-jardim-pantanal',
      title: 'jardim pantanal',
      img: 'assets/images/jardim_pantanal-1.svg',
      texto_0: 'O Jardim Pantanal está localizado na zona norte de São Paulo, na subprefeitura de São Miguel no distrito Jardim Helena. Com cerca de 90 hectares, essa área está localizada na várzea da Bacia do Alto Tietê, fazendo divisa com o município de Guarulhos e entre o Parque Jardim Helena e Parque Biacica. O uso predominante nesse solo é residencial.',
      texto_1: 'Entre os desafios, está posta a alta vulnerabilidade do perímetro, tendo uma média de renda mensal baixa e uma parcela significativa de população sem renda. Para além da esfera econômica, há questões envolvendo moradia e regularização fundiária, falta de equipamentos públicos, acúmulo de resíduos por descarte irregular e oferta deficiente de transporte público.',
      texto_2: 'Entre as potencialidades, há no território entidades locais consolidadas, como o Espaço Alana, que promove atividades para a população, além de equipamentos municipais como escolas. Ademais, o território está próximo de dois grandes parques, oferecendo potencial de expansão de atividades e circulação segura.',
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
          img_0: 'assets/images/MAPA05_Perímetro-Jd_Pantanal.svg',
          img_1: 'assets/images/MAPA15_PROBLEMÁTICAS-JARDIM_PANTANAL.svg',
          img_2: 'assets/images/MAPA16_POTENCIALIDADES-JARDIM_PANTANAL.svg',
          img_3: 'assets/images/FASE-01-PANTANAL_page-0001',
          img_4: 'assets/images/FASE-01-PANTANAL_page-0002.svg'
        }
      ]
    }
  ];

  currentSlide: number = 0;
  autoSlideInterval: any;
  activeThumbnail: number = 0;
  visibleSlides: { image: string; caption: string }[] = [];
  thumbnailStartIndex: number = 0;
  thumbnailLimit: number = 4;

  territorio: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const url: string | null = this.route.snapshot.paramMap.get('url');
    console.log('URL parameter:', url); 
    if (url) {
      const foundTerritory = this.territorios.find(t => t.url === url);
      if (foundTerritory) {
        this.territorio = foundTerritory;
        this.startAutoSlide();
      }
    }
  }

  nextSlide(): void {
    if (this.territorio?.mapas[0]) {
      this.currentSlide = (this.currentSlide + 1) % Object.keys(this.territorio.mapas[0]).length;
    }
  }

  prevSlide(): void {
    if (this.territorio?.mapas[0]) {
      this.currentSlide =
        (this.currentSlide - 1 + Object.keys(this.territorio.mapas[0]).length) %
        Object.keys(this.territorio.mapas[0]).length;
    }
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
  slides: { image: string; caption: string }[] = [
    { image: 'assets/images/image-38.svg', 
      caption: '' },
    { image: 'asste/images/image_lapenna-2-scaled.svg', 
      caption: '' },
    { image: 'assets/images/Cinema_Baccarelli_1.svg', 
      caption: '' },
    { image: 'assets/images/Ativação_26.svg', 
      caption: '' },
    { image: 'assets/images/FOTO-5.svg', 
      caption: '' },
    { image: 'assets/images/WhatsApp.svg', 
      caption: '' },
    { image: 'assets/images/Formigas-de-Embauba.svg', 
      caption: '' },
    { image: 'assets/images/IMG_0914.svg', 
      caption: '' },
    { image: 'assets/images/FOTO-4333.svg', 
      caption: '' },
    { image: 'assets/images/UrbanismoSocial_Sangois.svg', 
      caption: '' },
    
  ];

  nextSlides() {
    const totalSlides = this.slides.length;
    this.activeThumbnail = this.currentSlide;
    this.currentSlide = (this.currentSlide + 1) % totalSlides;
    if (this.currentSlide >= this.thumbnailStartIndex + this.thumbnailLimit) {
      this.thumbnailStartIndex++;
    }

    this.updateVisibleThumbnails();
  }

  setSlide(index: number) {
    this.activeThumbnail = index;
    this.currentSlide = index;
    if (this.currentSlide >= this.thumbnailStartIndex + this.thumbnailLimit) {
      this.thumbnailStartIndex = this.currentSlide - this.thumbnailLimit + 1;
    } else if (this.currentSlide < this.thumbnailStartIndex) {
      this.thumbnailStartIndex = this.currentSlide;
    }
    this.updateVisibleThumbnails();
  }

  updateVisibleThumbnails() {
    this.visibleSlides = this.slides.slice(
      this.thumbnailStartIndex,
      this.thumbnailStartIndex + this.thumbnailLimit
    );
  }
}
