"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const contact_component_1 = require("./contact.component");
describe('ContactComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [contact_component_1.ContactComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(contact_component_1.ContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
