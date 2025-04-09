import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticandoComponent } from './practicando.component';

describe('PracticandoComponent', () => {
  let component: PracticandoComponent;
  let fixture: ComponentFixture<PracticandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticandoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
