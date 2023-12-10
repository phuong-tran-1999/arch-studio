import { CommonModule, ViewportScroller } from '@angular/common';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {
    CONTACT_FORM_ERROR_MESSAGES,
    Contact,
} from '@modules/shared/data-access';
import { Map, map, marker, tileLayer } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ContactService } from './contact.service';

@Component({
    selector: 'fm-contact',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ContactService],
})
export class ContactComponent implements OnInit, AfterViewInit {
    private _fb = inject(FormBuilder);
    private _service = inject(ContactService);
    private _viewportScroller = inject(ViewportScroller);

    public map!: Map;
    public form = this.setupForm();
    public contacts$ = this._service.getContacts();

    public errorList = CONTACT_FORM_ERROR_MESSAGES;

    getControl(name: string): AbstractControl | null {
        console.log('Get');
        return this.form.get(name);
    }

    ngOnInit(): void {
        this.setupForm();
    }

    ngAfterViewInit(): void {
        this.setupMap();
    }

    setupMap() {
        this._viewportScroller.setOffset([100, 0]);

        this.map = map('map').setView(
            [10.774705164491555, 106.69967428705613],
            14,
        );

        tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution:
                '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(this.map);
    }

    setupForm() {
        return this._fb.group({
            name: ['', [Validators.required, Validators.maxLength(20)]],
            email: ['', [Validators.required, Validators.email]],
            message: ['', [Validators.required, Validators.maxLength(200)]],
        });
    }

    viewOnMap(contact: Contact) {
        const { lat, lng, name } = contact;

        const mapMarker = marker([lat, lng]).addTo(this.map);
        mapMarker.bindPopup(name);
        this.map?.setView([lat, lng], 14);

        this.scrollTo('map');
    }

    scrollTo(anchorId: string) {
        this._viewportScroller.scrollToAnchor(anchorId);
    }

    submitForm() {
        console.log(this.form.value);
    }
}
