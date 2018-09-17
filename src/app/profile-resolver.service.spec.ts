import { inject, TestBed } from '@angular/core/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { ProfileResolverService } from './profile-resolver.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfileResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule
      ],
      providers: [ProfileResolverService]
    });
  });

  it('should be created', inject([ProfileResolverService], (service: ProfileResolverService) => {
    expect(service).toBeTruthy();
  }));
});
