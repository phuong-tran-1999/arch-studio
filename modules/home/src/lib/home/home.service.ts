import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Card, HeroSlide } from '@modules/shared/data-access';
import { Observable, map } from 'rxjs';

@Injectable()
export class HomeService {
    private _httpService = inject(HttpClient);

    getHeroSlide(): Observable<HeroSlide[]> {
        return this._httpService.get<HeroSlide[]>(
            '/assets/data/hero-slide.json',
        );
    }

    getPreviewFeatured(): Observable<Card[]> {
        return this._httpService
            .get<Card[]>('/assets/data/project.json')
            .pipe(map((result) => result.filter((item) => !!item.forPreview)));
    }
}
