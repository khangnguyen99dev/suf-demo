"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const cart_mini_component_1 = require("./cart-mini.component");
describe('CartMiniComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [cart_mini_component_1.CartMiniComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(cart_mini_component_1.CartMiniComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
