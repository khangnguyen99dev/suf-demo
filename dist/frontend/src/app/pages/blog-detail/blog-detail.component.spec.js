"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const blog_detail_component_1 = require("./blog-detail.component");
describe('BlogDetailComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [blog_detail_component_1.BlogDetailComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(blog_detail_component_1.BlogDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
