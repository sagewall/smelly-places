import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { environment } from '../../environments/environment';
import { PlaceDeleteDialogComponent } from './place-delete-dialog.component';

const place = {
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
};

describe('PlaceDeleteDialogComponent', () => {
  let component: PlaceDeleteDialogComponent;
  let fixture: ComponentFixture<PlaceDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceDeleteDialogComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        MatDialogModule
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: place
        }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
