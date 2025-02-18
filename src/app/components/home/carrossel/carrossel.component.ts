import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { News, ServiceNews } from '../../pages/news/service-news.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [RouterModule, BrowserModule, HttpClientModule],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.scss'
})
export class CarrosselComponent implements AfterViewInit, OnDestroy {
  newsList: News[] = [];
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;
  private intervalId: any;

  constructor(private newsService: ServiceNews) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data) => {
      this.newsList = data;
    });
  }

  ngAfterViewInit() {
    this.startAutoScroll();
  }

  startAutoScroll() {
    this.intervalId = setInterval(() => {
      if (this.carousel && this.carousel.nativeElement) {
        let container = this.carousel.nativeElement;
        container.scrollBy({ left: 300, behavior: 'smooth' });
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
          setTimeout(() => {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          }, 1000);
        }
      }
    }, 3000);
  }

  stopAutoScroll() {
    clearInterval(this.intervalId);
  }

  nextSlide() {
    this.stopAutoScroll();
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    this.startAutoScroll();
  }

  prevSlide() {
    this.stopAutoScroll();
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

}
