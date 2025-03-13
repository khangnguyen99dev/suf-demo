"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const portfolio_detail_component_1 = require("./portfolio-detail.component");
describe('PortfolioDetailComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [portfolio_detail_component_1.PortfolioDetailComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(portfolio_detail_component_1.PortfolioDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
