import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from './contact.service';

@Component({
    selector: 'fm-contact',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ContactService],
})
export class ContactComponent {
    private _service = inject(ContactService);
    public contacts$ = this._service.getContacts();
}
