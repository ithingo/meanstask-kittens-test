import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KittensListComponent } from './components/kittens-list/kittens-list.component';
import { KittensFormComponent } from './components/kittens-form/kittens-form.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-kitten' },
  { path: 'add-kitten', component: KittensFormComponent },
  { path: 'edit-kitten/:id', component: KittensFormComponent },
  { path: 'kittens', component: KittensListComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
