import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/pages/home/home.component';
import { ProblemsetComponent } from './componentes/pages/problemset/problemset.component';


export const routes: Routes = [
{path:"", title:'Home', component:HomeComponent},
{path:"home", title:'Home', component:HomeComponent},
{path:"problemsset", title:'Problem', component:ProblemsetComponent},
];
