import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProdComponentComponent } from './edit-prod-component.component';

describe('EditProdComponentComponent', () => {
  let component: EditProdComponentComponent;
  let fixture: ComponentFixture<EditProdComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProdComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
