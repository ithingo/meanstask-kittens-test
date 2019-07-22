import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddKittensComponent } from './components/add-kittens/add-kittens.component';
import { EditKittensComponent } from './components/edit-kittens/edit-kittens.component';
import { KittensListComponent } from './components/kittens-list/kittens-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-kittens' },
  { path: 'add-kittens', component: AddKittensComponent },
  { path: 'edit-kittens/:id', component: EditKittensComponent },
  { path: 'kittens', component: KittensListComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
