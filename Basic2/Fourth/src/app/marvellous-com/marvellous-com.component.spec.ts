import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellousComComponent } from './marvellous-com.component';

describe('MarvellousComComponent', () => {
  let component: MarvellousComComponent;
  let fixture: ComponentFixture<MarvellousComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvellousComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvellousComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
