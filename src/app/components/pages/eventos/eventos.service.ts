import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Acervo {
 title: string;
 date:string;
 time:string;
 description:string;
 link?:string;
 img?:string;
}

@Injectable({
  providedIn: 'root'
})

export class EventosService {
  private acervoUrl = 'assets/json/acervo.json';

  constructor(private http: HttpClient) { }

  getAcervo(): Observable<Acervo[]> {
    return this.http.get<Acervo[]>(this.acervoUrl);
  }
}
