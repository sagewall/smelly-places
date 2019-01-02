import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MAT_DIALOG_DATA } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../../environments/environment';
import { PlaceEditDialogComponent } from './place-edit-dialog.component';

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

describe('PlaceEditDialogComponent', () => {
  let component: PlaceEditDialogComponent;
  let fixture: ComponentFixture<PlaceEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlaceEditDialogComponent
      ],
      imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule
      ],
      providers: [
        // { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: place }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
