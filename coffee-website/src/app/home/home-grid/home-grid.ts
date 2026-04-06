import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { HomeGridService } from './home-grid-service';
import { HomeGridItem } from './home-grid-item.schema';

@Component({
  selector: 'coffee-home-grid',
  imports: [NgOptimizedImage, MatButtonModule],
  templateUrl: './home-grid.html',
  styleUrl: './home-grid.scss',
})
export class HomeGrid {
  homeGridItemList: HomeGridItem[] = [];
  HomeGridService: HomeGridService = inject(HomeGridService);

  constructor() {
    this.homeGridItemList = this.HomeGridService.getHomeGridItemList();
  }


}
