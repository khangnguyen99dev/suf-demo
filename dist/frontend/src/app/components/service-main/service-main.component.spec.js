"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const service_main_component_1 = require("./service-main.component");
describe('ServiceMainComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [service_main_component_1.ServiceMainComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(service_main_component_1.ServiceMainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
