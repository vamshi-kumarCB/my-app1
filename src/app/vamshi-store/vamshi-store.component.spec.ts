import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VamshiStoreComponent } from './vamshi-store.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from '../rating/rating.component';

describe('VamshiStoreComponent', () => {
  let component: VamshiStoreComponent;
  let fixture: ComponentFixture<VamshiStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VamshiStoreComponent,TextareaComponent,RatingComponent],
      imports: [FormsModule], 
    })
    .compileComponents();

    fixture = TestBed.createComponent(VamshiStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
