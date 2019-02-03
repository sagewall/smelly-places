import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { PolicyAcceptanceComponent } from './policy-acceptance.component';

describe('PolicyAcceptanceComponent', () => {
  let component: PolicyAcceptanceComponent;
  let fixture: ComponentFixture<PolicyAcceptanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PolicyAcceptanceComponent
      ],
      imports: [
        MatSnackBarModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyAcceptanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
