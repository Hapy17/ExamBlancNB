import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsJoueurComponent } from './details-joueur.component';

describe('DetailsJoueurComponent', () => {
  let component: DetailsJoueurComponent;
  let fixture: ComponentFixture<DetailsJoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsJoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
