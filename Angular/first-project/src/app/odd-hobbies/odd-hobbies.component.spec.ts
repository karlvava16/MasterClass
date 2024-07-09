import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddHobbiesComponent } from './odd-hobbies.component';

describe('OddHobbiesComponent', () => {
  let component: OddHobbiesComponent;
  let fixture: ComponentFixture<OddHobbiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OddHobbiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OddHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
