"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const blog_main_component_1 = require("./blog-main.component");
describe('BlogMainComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [blog_main_component_1.BlogMainComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(blog_main_component_1.BlogMainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
