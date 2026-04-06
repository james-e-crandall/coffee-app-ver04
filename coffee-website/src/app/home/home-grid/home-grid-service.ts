import { Injectable } from '@angular/core';
import { HomeGridItem } from './home-grid-item.schema';

@Injectable({
  providedIn: 'root',
})
export class HomeGridService {
  homeGridItemList: HomeGridItem[] = [
    {
      type: 'text',
      title: 'Acme Fresh Start Housing',
      description: 'Chicago',
      colorClass:'green-theme',
      columnClass:'two-column',
      image:''
    },
    {
      type: 'button',
      title: 'Acme Fresh Start Housing',
      description: 'Chicago',
      colorClass:'green-theme',
      columnClass:'two-column',
      image:''
    },
    {
      type: 'image',
      title: 'Acme Fresh Start Housing',
      description: 'Chicago',
      colorClass:'green-theme',
      columnClass:'two-column',
      image:'/images/sunset03.png'
    },
    {
      type: 'text',
      title: 'Acme Fresh Start Housing',
      description: 'Chicago',
      colorClass:'orange-theme',
      columnClass:'one-column',
      image:''
    },
  ];

  getHomeGridItemList(): HomeGridItem[] {
    return this.homeGridItemList;
  }


}
