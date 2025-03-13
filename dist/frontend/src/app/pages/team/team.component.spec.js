"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const team_component_1 = require("./team.component");
describe('TeamComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [team_component_1.TeamComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(team_component_1.TeamComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
