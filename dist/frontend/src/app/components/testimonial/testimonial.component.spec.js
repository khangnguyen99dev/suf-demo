"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const testimonial_component_1 = require("./testimonial.component");
describe('TestimonialComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [testimonial_component_1.TestimonialComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(testimonial_component_1.TestimonialComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
