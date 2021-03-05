import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';


const routes: Routes = [ // The order of this array matters
  {path: 'test', component: TestComponent},
  {path: 'test2', component: Test2Component},
  {path: '**', redirectTo: 'app'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
