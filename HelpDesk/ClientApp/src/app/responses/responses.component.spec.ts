/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ResponsesComponent } from './responses.component';

let component: ResponsesComponent;
let fixture: ComponentFixture<ResponsesComponent>;

describe('responses component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ResponsesComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ResponsesComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});