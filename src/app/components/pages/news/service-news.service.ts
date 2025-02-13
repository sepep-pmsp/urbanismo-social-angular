import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface News {
  id: number;
  title: string;
  img: string;
  date: string;
  date_complete?: string;
  por: string;
  texto_1: string;
  texto_2: string;
  title_list: string;
  description_list: string;
  list: string;
  url?: string;
  link?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceNews {
  private newsUrl = 'assets/json/news.json';

  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(this.newsUrl);
  }
}
