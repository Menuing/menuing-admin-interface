import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNutritionistComponent } from './delete-nutritionist.component';

describe('DeleteNutritionistComponent', () => {
  let component: DeleteNutritionistComponent;
  let fixture: ComponentFixture<DeleteNutritionistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteNutritionistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNutritionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
