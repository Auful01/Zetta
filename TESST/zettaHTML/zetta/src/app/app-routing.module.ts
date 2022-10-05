import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: 'table', component: TableComponent },
  // { pathMatch: 'full', path: 'table', component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
