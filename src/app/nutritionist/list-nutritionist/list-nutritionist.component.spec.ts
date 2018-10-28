import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNutritionistComponent } from './list-nutritionist.component';

describe('ListNutritionistComponent', () => {
  let component: ListNutritionistComponent;
  let fixture: ComponentFixture<ListNutritionistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNutritionistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNutritionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
