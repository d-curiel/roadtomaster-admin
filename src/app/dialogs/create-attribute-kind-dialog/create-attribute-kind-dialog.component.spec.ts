import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAttributeKindDialogComponent } from './create-attribute-kind-dialog.component';

describe('CreateAttributeKindDialogComponent', () => {
  let component: CreateAttributeKindDialogComponent;
  let fixture: ComponentFixture<CreateAttributeKindDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAttributeKindDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAttributeKindDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
