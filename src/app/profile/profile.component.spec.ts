import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatIconModule, MatListModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MapService } from '../map.service';
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  const mockUser: firebase.User = {
    delete: () => null,
    emailVerified: true,
    getIdTokenResult: () => null,
    getIdToken: () => null,
    isAnonymous: false,
    linkAndRetrieveDataWithCredential: () => null,
    linkWithCredential: () => null,
    linkWithPhoneNumber: () => null,
    linkWithPopup: () => null,
    linkWithRedirect: () => null,
    metadata: {},
    phoneNumber: '555-555-5555',
    providerData: [{
      displayName: 'Test Name',
      email: 'Test@Test.Test',
      phoneNumber: '666-666-6666',
      photoURL: 'https://internet.net/photo.jpg',
      providerId: '12345',
      uid: '111'
    }],
    reauthenticateAndRetrieveDataWithCredential: () => null,
    reauthenticateWithCredential: () => null,
    reauthenticateWithPhoneNumber: () => null,
    reauthenticateWithPopup: () => null,
    reauthenticateWithRedirect: () => null,
    refreshToken: 'testtoken',
    reload: () => null,
    sendEmailVerification: () => null,
    toJSON: () => null,
    unlink: () => null,
    updateEmail: () => null,
    updatePassword: () => null,
    updatePhoneNumber: () => null,
    updateProfile: () => null,
    displayName: 'Test Name',
    email: 'Test@Test.Test',
    photoURL: 'https://sagewall.io/photo.jpg',
    providerId: '12345',
    uid: '111'
  };

  const mockPlaces$ = of([
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-104.9623, 39.7321]
      },
      properties: {
        displayName: 'Test Name',
        email: 'Test@Test.Test',
        modified: false,
        modifiedOn: new Date(),
        name: 'Denver Botanic Garden',
        smell: 'Flowers',
        uid: '111'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-105.2198, 40.0597]
      },
      properties: {
        displayName: 'Test Name',
        email: 'Test@Test.Test',
        modified: false,
        modifiedOn: new Date(),
        name: 'Celestial Seasonings',
        smell: 'Peppermint',
        uid: '111'
      }
    }
  ]);

  const mockMapService = {
    getFeaturesByUser: () => {
      return {
        valueChanges: () => mockPlaces$
      };
    }
  };

  const mockActivatedRoute = {
    data: {
      subscribe: (fn: (value) => void) => fn({
        currentUser: mockUser
      })
    },
    params: {
      subscribe: (fn: (value) => void) => fn({
        uid: 'foo'
      })
    },
    snapshot: {
      url: [
        {
          path: 'profile',
        }
      ]
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule,
        MatListModule,
        RouterTestingModule
      ],
      declarations: [ProfileComponent],
      providers: [
        {
          provide: MapService,
          useValue: mockMapService
        },
        {
          provide: ActivatedRoute,
          useValue: mockActivatedRoute
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have displayName of Test Name', () => {
    expect(component.currentUser.displayName).toBe('Test Name');
  });
  it('should have email of Test@Test.Test', () => {
    expect(component.currentUser.email).toBe('Test@Test.Test');
  });
  it('should have two places', () => {
    component.places$.subscribe(places => {
      expect(places.length).toBe(2);
    });
  });
});
