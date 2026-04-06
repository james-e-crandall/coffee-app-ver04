import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'coffee-home-grid',
  imports: [NgOptimizedImage, MatButtonModule],
  templateUrl: './home-grid.html',
  styleUrl: './home-grid.scss',
})
export class HomeGrid {}
