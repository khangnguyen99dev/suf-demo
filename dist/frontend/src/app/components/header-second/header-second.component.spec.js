"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const header_second_component_1 = require("./header-second.component");
describe('HeaderSecondComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [header_second_component_1.HeaderSecondComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(header_second_component_1.HeaderSecondComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
