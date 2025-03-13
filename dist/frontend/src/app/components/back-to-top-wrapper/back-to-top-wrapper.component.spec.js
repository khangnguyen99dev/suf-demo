"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const back_to_top_wrapper_component_1 = require("./back-to-top-wrapper.component");
describe('BackToTopWrapperComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [back_to_top_wrapper_component_1.BackToTopWrapperComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(back_to_top_wrapper_component_1.BackToTopWrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
