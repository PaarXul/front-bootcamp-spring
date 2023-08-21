import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCargosComponent } from './view-cargos.component';

describe('ViewCargosComponent', () => {
  let component: ViewCargosComponent;
  let fixture: ComponentFixture<ViewCargosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCargosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
