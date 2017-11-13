import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { Vs2Component } from './vs2/vs2.component';
import { Vs3Component } from './vs3/vs3.component';
import { RbgComponent } from './rbg/rbg.component';

const routes: Routes = [
    { path: '', component: MainContentComponent },
   { path: 'vs2', component: Vs2Component },
   { path: 'vs3', component: Vs3Component },
   { path: 'rbg', component: RbgComponent},
   { path: '**', component: MainContentComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }