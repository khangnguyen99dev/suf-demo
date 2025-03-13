"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const service_detail_component_1 = require("./service-detail.component");
describe('ServiceDetailComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [service_detail_component_1.ServiceDetailComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(service_detail_component_1.ServiceDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
