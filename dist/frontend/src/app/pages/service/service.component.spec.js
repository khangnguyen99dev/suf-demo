"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const service_component_1 = require("./service.component");
describe('ServiceComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [service_component_1.ServiceComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(service_component_1.ServiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
