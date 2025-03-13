"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const pricing_plan_component_1 = require("./pricing-plan.component");
describe('PricingPlanComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [pricing_plan_component_1.PricingPlanComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(pricing_plan_component_1.PricingPlanComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
