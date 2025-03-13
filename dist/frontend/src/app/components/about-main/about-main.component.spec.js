"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const about_main_component_1 = require("./about-main.component");
describe('AboutMainComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [about_main_component_1.AboutMainComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(about_main_component_1.AboutMainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
