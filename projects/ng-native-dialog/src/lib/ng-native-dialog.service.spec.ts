import { TestBed } from '@angular/core/testing';

import { NgNativeDialogService } from './ng-native-dialog.service';

describe('NgNativeDialogService', () => {
  let service: NgNativeDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgNativeDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
