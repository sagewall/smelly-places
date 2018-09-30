import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';
import { PlaceDeleteAllDialogComponent } from './place-delete-all-dialog.component';

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

describe('PlaceDeleteAllDialogComponent', () => {
  let component: PlaceDeleteAllDialogComponent;
  let fixture: ComponentFixture<PlaceDeleteAllDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceDeleteAllDialogComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        MatDialogModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: places
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDeleteAllDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
