import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { StickyHoldComponent } from "../../home/sticky-hold/sticky-hold.component";

@Component({
  selector: 'app-partners',
  imports: [NgFor, StickyHoldComponent],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {

  parceiros = [
    {
      title: 'Fundação Tide Setubal',
      subtitle: 'Tipo de Instituição',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquam augue vitae dapibus. Aenean eu velit eget est faucibus imperdiet ut ac nunc. In eleifend, ligula quis accumsan consectetur cteturconsectetur ligula quis Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img_parceiro: 'assets/images/FTS_1.svg'
    },
    {
      title: 'Comunitas',
      subtitle: 'Tipo de Instituição',
      description: 'Acordo de Cooperação Técnica 002/2023/SGM\nProcesso SEI 6011.2023/0002069-0',
      img_parceiro: 'assets/images/comunitas-logo.svg'
    },
    {
      title: 'Insper | Arq. Futuro',
      subtitle: 'Tipo de Instituição',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend aliquam augue vitae dapibus. Aenean eu velit eget est faucibus imperdiet ut ac nunc. In eleifend, ligula quis accumsan consectetur cteturconsectetur ligula quis Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      img_parceiro: 'assets/images/parceiro_5.svg'
    },
    {
      title: 'Instituto Alana',
      subtitle: 'Tipo de Instituição',
      description: 'O Instituto Alana trabalha com programas próprios, projetos e parcerias para, assim, garantir condições para o desenvolvimento integral da infância em seus diferentes espaços de vivência. Uma organização da sociedade civil, sem fins lucrativos. Com a missão de “honrar a criança” e é a origem de um trabalho que começou em 1994, no Jardim Pantanal, em São Paulo.\nAcordo de Cooperação Técnica 003/2023/SGM\nProcesso SEI 6011.2023/0002566-7',
      img_parceiro: 'assets/images/parceiro_6.svg'
    },
    {
      title: 'Fundação Tellescom',
      subtitle: 'Tipo de Instituição',
      description: 'O grupo Tellescom possui um ecossistema completo que integra pesquisa e desenvolvimento, manufatura, logística, software e serviços em soluções inovadoras de transformação digital para grandes operadoras, provedores de internet e utilities.\nTermo de Doação nº04/2023/SGM\nProcesso SEI 6011.2023/0002590-0',
      img_parceiro: 'assets/images/parceiro_1.svg'
    },
    {
      title: 'CAU/SP',
      subtitle: 'Tipo de Instituição',
      description: 'O Conselho de Arquitetura e Urbanismo de São Paulo – CAU/SP é uma autarquia federal responsável pela fiscalização e regulamentação profissional no âmbito do estado de São Paulo. Foi criado junto com o CAU/BR e os demais Conselhos de Arquitetura e Urbanismo dos Estados e do Distrito Federal (CAU/UF) por meio da Lei Federal nº 12.378, promulgada em 31 de dezembro de 2010.\nAcordo de Cooperação Técnica 006/2023/CAU/SP\nProcesso SEI 6011.2023/0003234-5',
      img_parceiro: 'assets/images/parceiro_2.svg'
    },
    {
      title: 'Instituto Baccarelli',
      subtitle: 'Tipo de Instituição',
      description: 'Uma das mais importantes organizações sociais sem fins lucrativos e não governamentais do Brasil, o Instituto Baccarelli foi fundado em 1996 pelo maestro Silvio Baccarelli (1931-2019), promove, desde então, um trabalho social com crianças e jovens em situação de vulnerabilidade em Heliópolis.',
      img_parceiro: 'assets/images/parceiro_4.svg'
    },
    {
      title: 'Diagonal',
      subtitle: 'Tipo de Instituição',
      description: 'A Diagonal é uma consultoria pioneira em gestão social, que apoia empresas, organizações e governos a elevarem seu padrão ESG e gerarem impacto socioambiental positivo.\nPor meio de uma metodologia inovadora de gestão social que combina conhecimento interdisciplinar, olhar humanizado, tecnologias sociais e digitais em todas as fases do projeto - do diagnóstico à implementação.\nTermo de Doação nº04/2023/SGM\nProcesso SEI 6011.2023/0002590-0',
      img_parceiro: 'assets/images/parceiro_7.svg'
    },
    {
      title: 'C40 Cities',
      subtitle: 'Tipo de Instituição',
      description: 'C40 é uma rede global de quase 100 prefeitos das principais cidades do mundo que estão unidos em ação para enfrentar a crise climática.',
      img_parceiro: 'assets/images/parceiro_9.svg'
    },
    {
      title: 'Pacto pelas Cidades Justas I',
      subtitle: 'Tipo de Instituição',
      description: 'Fundação Tide Setúbal, Instituto de Arquitetos do Brasil (IAB/SP), Instituto BEI\nTermo de Doação nº 01/2020/SMDU\nProcesso SEI 6066.2019/0007883-6\nPORTARIA SGM 184, DE 7 DE JULHO DE 2020',
      img_parceiro: 'assets/images/parceiro_3.svg'
    },
    {
      title: 'Pacto pelas Cidades Justas II',
      subtitle: 'Tipo de Instituição',
      description: 'Fundação Tide Setúbal, Instituto de Arquitetos do Brasil (IAB/SP), Instituto BEI e Instituto Baccarelli - Sociedade de Consertos de São Paulo\nTermo de Doação nº 01/2023/SGM\nProcesso SEI 6011.2023/0000510-0',
      img_parceiro: 'assets/images/parceiro_3.svg'
    }
  ];

}
