import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatIcon, MatNavList, MatSidenav, MatSidenavContainer, MatSidenavContent, MatSnackBarModule, MatToolbar } from '@angular/material';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from '../../environments/environment';
import { MapComponent } from '../map/map.component';
import { PolicyAcceptanceComponent } from '../policy-acceptance/policy-acceptance.component';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [PolicyAcceptanceComponent]
      }
    });

    TestBed.configureTestingModule({
      declarations: [
        MapComponent,
        MatIcon,
        MatNavList,
        MatSidenav,
        MatSidenavContent,
        MatSidenavContainer,
        MatToolbar,
        NavigationComponent,
        PolicyAcceptanceComponent
      ],
      imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        BrowserAnimationsModule,
        MatSnackBarModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
