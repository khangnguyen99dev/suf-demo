"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const footer_component_1 = require("./footer.component");
describe('FooterComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [footer_component_1.FooterComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(footer_component_1.FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
