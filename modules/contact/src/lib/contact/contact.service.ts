import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Contact } from '@modules/shared/data-access';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {
    private _httpService = inject(HttpClient);

    getContacts(): Observable<Contact[]> {
        return this._httpService.get<Contact[]>('/assets/data/contact.json');
    }
}
