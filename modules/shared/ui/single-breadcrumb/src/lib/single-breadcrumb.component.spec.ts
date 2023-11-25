import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleBreadcrumbComponent } from './single-breadcrumb.component';

describe('SingleBreadcrumbComponent', () => {
    let component: SingleBreadcrumbComponent;
    let fixture: ComponentFixture<SingleBreadcrumbComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [SingleBreadcrumbComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SingleBreadcrumbComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
