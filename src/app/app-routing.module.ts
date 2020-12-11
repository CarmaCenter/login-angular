import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './Components/log-in/log-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { ForGotComponent } from './for-got/for-got.component';

const routes: Routes = [
  {path:'',component:LogInComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'for-got',component:ForGotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
