import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';
import { ProfileDeleteDialogComponent } from './profile-delete-dialog.component';

const places = [
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
      coordinates: [-104.9625, 39.7323]
    },
    properties: {
      displayName: 'Test Name2',
      email: 'Test2@Test.Test2',
      modified: false,
      modifiedOn: new Date(),
      name: 'Denver Botanic Garden 2',
      smell: 'Flowers 2',
      uid: '111'
    }
  }
];

describe('ProfileDeleteDialogComponent', () => {
  let component: ProfileDeleteDialogComponent;
  let fixture: ComponentFixture<ProfileDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDeleteDialogComponent],
      imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        MatDialogModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: places
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
