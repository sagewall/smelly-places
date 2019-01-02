import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatDialogModule } from '@angular/material';
import { environment } from '../../environments/environment';
import { MapEditComponent } from './map-edit.component';

describe('MapEditComponent', () => {
  let component: MapEditComponent;
  let fixture: ComponentFixture<MapEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapEditComponent],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        MatDialogModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
