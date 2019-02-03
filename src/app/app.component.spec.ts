import { async, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatIcon, MatNavList, MatSidenav, MatSidenavContainer, MatSidenavContent, MatSnackBarModule, MatToolbar } from '@angular/material';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PolicyAcceptanceComponent } from './policy-acceptance/policy-acceptance.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [PolicyAcceptanceComponent]
      }
    });

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MapComponent,
        MatIcon,
        MatNavList,
        MatSidenav,
        MatSidenavContainer,
        MatSidenavContent,
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
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'smelly-places'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('smelly-places');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('Smelly Places');
  }));
});
