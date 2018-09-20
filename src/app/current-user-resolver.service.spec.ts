import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { CurrentUserResolverService } from './current-user-resolver.service';

describe('ProfileResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        RouterTestingModule
      ],
      providers: [CurrentUserResolverService]
    });
  });

  it('should be created', inject([CurrentUserResolverService], (service: CurrentUserResolverService) => {
    expect(service).toBeTruthy();
  }));
});
