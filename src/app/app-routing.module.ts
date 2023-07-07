import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { BasicGridComponent } from './basic-grid/basic-grid.component';
import { GridWithTemplatesComponent } from './grid-with-templates/grid-with-templates.component';
import { GridDetailsComponent } from './grid-details/grid-details.component';

export const routes: Routes = [
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'basic-grid', component: BasicGridComponent, data: { text: 'Basic grid' } },
  { path: 'grid-with-templates', component: GridWithTemplatesComponent, data: { text: 'Grid with templates' } },
  { path: 'grid-details', component: GridDetailsComponent, data: { text: 'Grid details' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
