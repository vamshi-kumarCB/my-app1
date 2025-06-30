import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VamshiStoreComponent } from './vamshi-store.component';

describe('VamshiStoreComponent', () => {
  let component: VamshiStoreComponent;
  let fixture: ComponentFixture<VamshiStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VamshiStoreComponent ]
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
