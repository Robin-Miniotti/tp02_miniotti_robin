import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollutionDeclarationRecapComponent } from './pollution-declaration-recap.component';

describe('PollutionDeclarationRecapComponent', () => {
  let component: PollutionDeclarationRecapComponent;
  let fixture: ComponentFixture<PollutionDeclarationRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollutionDeclarationRecapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollutionDeclarationRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
