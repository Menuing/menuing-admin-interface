import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyNutritionistComponent } from './modify-nutritionist.component';

describe('ModifyNutritionistComponent', () => {
  let component: ModifyNutritionistComponent;
  let fixture: ComponentFixture<ModifyNutritionistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyNutritionistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyNutritionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
