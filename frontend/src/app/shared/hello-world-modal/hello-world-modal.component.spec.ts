import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldModalComponent } from './hello-world-modal.component';

describe('HelloWorldModalComponent', () => {
  let component: HelloWorldModalComponent;
  let fixture: ComponentFixture<HelloWorldModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
