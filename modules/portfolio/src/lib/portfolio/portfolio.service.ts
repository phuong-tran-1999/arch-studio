import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Card } from '@modules/shared/data-access';
import { Observable } from 'rxjs';

@Injectable()
export class PortfolioService {
    private _httpService = inject(HttpClient);

    getAllProjects(): Observable<Card[]> {
        return this._httpService.get<Card[]>('/assets/data/project.json');
    }
}
