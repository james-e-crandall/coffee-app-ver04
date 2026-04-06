import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScreenService } from '../../screen/screen-service';

@Component({
  selector: 'coffee-footer-layout',
  imports: [MatToolbarModule],
  templateUrl: './footer-layout.html',
  styleUrl: './footer-layout.scss',
})
export class FooterLayout {
    public screenService = inject(ScreenService);
}
