"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const about_component_1 = require("./about.component");
describe('AboutComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [about_component_1.AboutComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(about_component_1.AboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
