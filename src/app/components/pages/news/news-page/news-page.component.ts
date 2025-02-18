import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { News, ServiceNews } from '../service-news.service';

@Component({
  selector: 'app-news-page',
  imports: [RouterModule, BrowserModule, HttpClientModule],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent  implements OnInit{
  newsItem?: News;

  constructor(private route: ActivatedRoute, private newsService: ServiceNews) {}

  ngOnInit(): void {
    const url = this.route.snapshot.paramMap.get('url');
    this.newsService.getNews().subscribe((news) => {
      this.newsItem = news.find((item) => item.url === url);
    });
  }
}