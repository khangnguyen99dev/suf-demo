"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/router/testing");
const app_component_1 = require("./app.component");
const globals_1 = require("@jest/globals");
describe('AppComponent', () => {
    let component;
    let fixture;
    let compiled;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [testing_2.RouterTestingModule],
            declarations: [app_component_1.AppComponent]
        }).compileComponents();
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        component = fixture.componentInstance;
        compiled = fixture.nativeElement;
        fixture.detectChanges();
    });
    it('should create the app', () => {
        (0, globals_1.expect)(component).toBeTruthy();
    });
    it(`should have as title 'frontend'`, () => {
        (0, globals_1.expect)(component.title).toEqual('frontend');
    });
    it('should render title', () => {
        const element = fixture.nativeElement;
        const titleElement = element.querySelector('.content span');
        (0, globals_1.expect)(titleElement === null || titleElement === void 0 ? void 0 : titleElement.textContent).toContain('frontend app is running!');
    });
});
