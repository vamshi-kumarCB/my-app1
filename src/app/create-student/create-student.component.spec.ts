import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentComponent } from './create-student.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreateStudentComponent', () => {
  let component: CreateStudentComponent;
  let fixture: ComponentFixture<CreateStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          params: of({ id: '123' })
          // Mock whatever you need here. For example, a paramMap observable:
        }
      }
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
