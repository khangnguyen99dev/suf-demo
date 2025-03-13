"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const before_after_component_1 = require("./before-after.component");
describe('BeforeAfterComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [before_after_component_1.BeforeAfterComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(before_after_component_1.BeforeAfterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
