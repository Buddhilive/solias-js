import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNativeDialogComponent } from './ng-native-dialog.component';

describe('NgNativeDialogComponent', () => {
  let component: NgNativeDialogComponent;
  let fixture: ComponentFixture<NgNativeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgNativeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgNativeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
