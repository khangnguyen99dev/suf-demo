"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const contact_main_component_1 = require("./contact-main.component");
describe('ContactMainComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [contact_main_component_1.ContactMainComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(contact_main_component_1.ContactMainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
