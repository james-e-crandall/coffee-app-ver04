import { Routes } from '@angular/router';
import { HomePage } from './home/home-page/home-page';
import { AdminPage } from './admin/admin-page/admin-page';

const HomePageRoute = { path: '', component: HomePage, title: 'Home Page' };
const NotFoundRoute = { path: '**', component: HomePage, title: 'Home Page' };

const AdminPageRoute = { path: 'admin', component: AdminPage, title: 'Admin Page' };


export const routes: Routes = [
  HomePageRoute,
  AdminPageRoute,
  NotFoundRoute
];
