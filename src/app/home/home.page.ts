import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { STATES, FIXED_SIZE } from 'src/data/state';
import { Config } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ScrollingModule],
})
export class HomePage {
  itemSize = 56;
  fixedSizeData = FIXED_SIZE;
  
  constructor(private config: Config) {
    this.itemSize = config.get('mode') === 'ios' ? 44 : 56;
  }
}
