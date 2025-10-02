import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutionDeclarationFormComponent } from './pollution-declaration-form.component';

describe('PollutionDeclarationFormComponent', () => {
  let component: PollutionDeclarationFormComponent;
  let fixture: ComponentFixture<PollutionDeclarationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollutionDeclarationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollutionDeclarationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
