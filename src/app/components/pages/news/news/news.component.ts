import { Component, OnInit } from '@angular/core';
import { StickyHoldComponent } from "../../../home/sticky-hold/sticky-hold.component";
import { NgFor, NgIf } from '@angular/common';
import { LetreiroComponent } from "../../../letreiro/letreiro.component";
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { News, ServiceNews } from '../service-news.service';

@Component({
  selector: 'app-news',
  imports: [StickyHoldComponent, LetreiroComponent, NgFor, NgIf, RouterModule, BrowserModule, HttpClientModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit{
  newsList: News[] = [];

  constructor(private newsService: ServiceNews) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => {
      this.newsList = data;
    });
  }
}
