import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxGridModule, IgxActionStripModule } from '@infragistics/igniteui-angular';
import { BasicGridComponent } from './basic-grid.component';

describe('BasicGridComponent', () => {
  let component: BasicGridComponent;
  let fixture: ComponentFixture<BasicGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicGridComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxGridModule, IgxActionStripModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
