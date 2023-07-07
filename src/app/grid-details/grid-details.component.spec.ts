import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxIconModule } from '@infragistics/igniteui-angular';
import { GridDetailsComponent } from './grid-details.component';

describe('GridDetailsComponent', () => {
  let component: GridDetailsComponent;
  let fixture: ComponentFixture<GridDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridDetailsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
