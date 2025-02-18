import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StickyHoldComponent } from "../../../home/sticky-hold/sticky-hold.component";
import { Acervo, EventosService } from '../eventos.service';
import { NgFor, NgIf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-acervo',
  standalone: true,
  imports: [RouterModule, StickyHoldComponent, NgFor, NgIf, BrowserModule, HttpClientModule],
  templateUrl: './acervo.component.html',
  styleUrl: './acervo.component.scss'
})
export class AcervoComponent implements OnInit {
  acervoList: Acervo[] = [];

  constructor(private acervoService: EventosService) {}

  ngOnInit(): void {
    this.acervoService.getAcervo().subscribe((data) => {
      this.acervoList = data;
    });
  }
}
