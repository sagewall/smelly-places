import { inject, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RouterTestingModule } from '@angular/router/testing';
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
