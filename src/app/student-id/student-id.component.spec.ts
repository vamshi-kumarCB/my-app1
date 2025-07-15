import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIdComponent } from './student-id.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('StudentIdComponent', () => {
  let component: StudentIdComponent;
  let fixture: ComponentFixture<StudentIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentIdComponent ],
       imports: [HttpClientTestingModule,FormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
