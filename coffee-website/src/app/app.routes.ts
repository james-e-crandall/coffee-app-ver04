import { Routes } from '@angular/router';
import { HomePage } from './home/home-page/home-page';

const HomePageRoute = { path: '', component: HomePage, title: 'Home Page' };
const NotFoundRoute = { path: '**', component: HomePage, title: 'Home Page' };

export const routes: Routes = [
  HomePageRoute,
  NotFoundRoute
];
