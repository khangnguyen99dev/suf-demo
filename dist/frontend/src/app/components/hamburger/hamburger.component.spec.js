"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const hamburger_component_1 = require("./hamburger.component");
describe('HamburgerComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [hamburger_component_1.HamburgerComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(hamburger_component_1.HamburgerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
