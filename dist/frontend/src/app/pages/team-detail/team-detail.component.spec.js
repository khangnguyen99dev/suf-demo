"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const team_detail_component_1 = require("./team-detail.component");
describe('TeamDetailComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await testing_1.TestBed.configureTestingModule({
            imports: [team_detail_component_1.TeamDetailComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(team_detail_component_1.TeamDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
