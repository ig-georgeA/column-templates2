import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicGridComponent } from './basic-grid/basic-grid.component';
import { IgxGridModule, IgxActionStripModule, IgxAvatarModule, IgxSelectModule, IgxButtonModule, IgxRippleModule, IgxChipsModule, IgxInputGroupModule, IgxIconModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { GridWithTemplatesComponent } from './grid-with-templates/grid-with-templates.component';
import { GridDetailsComponent } from './grid-details/grid-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicGridComponent,
    GridWithTemplatesComponent,
    GridDetailsComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxGridModule,
    IgxActionStripModule,
    FormsModule,
    IgxAvatarModule,
    IgxSelectModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxChipsModule,
    IgxInputGroupModule,
    IgxIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
