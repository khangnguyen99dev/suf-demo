"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const slider_component_1 = require("./slider.component");
describe('SliderComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [slider_component_1.SliderComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(slider_component_1.SliderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
