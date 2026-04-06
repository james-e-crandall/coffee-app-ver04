import { Component } from '@angular/core';
import { Layout, LayoutMainContent } from '../../layout/layout/layout';
import { HomeGrid } from '../home-grid/home-grid';

@Component({
  selector: 'coffee-home-page',
  imports: [Layout, LayoutMainContent, HomeGrid],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
