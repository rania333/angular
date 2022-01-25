import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProdComponentComponent } from './add-prod-component.component';

describe('AddProdComponentComponent', () => {
  let component: AddProdComponentComponent;
  let fixture: ComponentFixture<AddProdComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProdComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
