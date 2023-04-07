import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { STATES, FIXED_SIZE } from 'src/data/state';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ScrollingModule],
})
export class HomePage {

  fixedSizeData = FIXED_SIZE;
  
  constructor() {}
}
