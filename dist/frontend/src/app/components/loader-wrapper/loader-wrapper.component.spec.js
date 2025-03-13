"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const loader_wrapper_component_1 = require("./loader-wrapper.component");
describe('LoaderWrapperComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [loader_wrapper_component_1.LoaderWrapperComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(loader_wrapper_component_1.LoaderWrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
