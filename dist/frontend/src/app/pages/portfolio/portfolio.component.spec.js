"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const portfolio_component_1 = require("./portfolio.component");
describe('PortfolioComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [portfolio_component_1.PortfolioComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(portfolio_component_1.PortfolioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
