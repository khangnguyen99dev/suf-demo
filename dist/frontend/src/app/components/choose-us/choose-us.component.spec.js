"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const choose_us_component_1 = require("./choose-us.component");
describe('ChooseUsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [choose_us_component_1.ChooseUsComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(choose_us_component_1.ChooseUsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
