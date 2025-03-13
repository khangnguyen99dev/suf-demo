"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const blog_grid_component_1 = require("./blog-grid.component");
describe('BlogGridComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [blog_grid_component_1.BlogGridComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(blog_grid_component_1.BlogGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
