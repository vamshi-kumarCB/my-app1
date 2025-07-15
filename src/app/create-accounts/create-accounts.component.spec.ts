import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountsComponent } from './create-accounts.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreateAccountsComponent', () => {
  let component: CreateAccountsComponent;
  let fixture: ComponentFixture<CreateAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAccountsComponent ],
      imports: [HttpClientTestingModule,ReactiveFormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' })  // ✅ mock route params
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
