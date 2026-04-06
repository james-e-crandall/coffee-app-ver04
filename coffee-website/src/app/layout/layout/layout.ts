import { Component } from '@angular/core';
import { HeaderLayout } from '../header-layout/header-layout';
import { FooterLayout } from '../footer-layout/footer-layout';

@Component({
  selector: 'coffee-layout',
  imports: [HeaderLayout, FooterLayout],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}

@Component({
  selector: 'app-layout-header-content',
  template: `<ng-content></ng-content>`,
})
export class LayoutHeaderContent {}


@Component({
  selector: 'coffee-layout-main-content',
  template: `<ng-content></ng-content>`,
})
export class LayoutMainContent {}

@Component({
  selector: 'coffee-layout-footer-content',
  template: `<ng-content></ng-content>`,
})
export class LayoutFooterContent {}
