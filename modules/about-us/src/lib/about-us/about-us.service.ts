import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Leader } from '@modules/shared/data-access';

@Injectable()
export class AboutUsService {
    private _httpService = inject(HttpClient);

    getLeaders(): Observable<Leader[]> {
        return this._httpService.get<Leader[]>('/assets/data/leader.json');
    }
}
