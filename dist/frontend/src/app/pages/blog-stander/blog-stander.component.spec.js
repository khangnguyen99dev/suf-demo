"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const blog_stander_component_1 = require("./blog-stander.component");
describe('BlogStanderComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [blog_stander_component_1.BlogStanderComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(blog_stander_component_1.BlogStanderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
