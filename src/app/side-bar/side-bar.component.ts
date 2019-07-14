import { Component, OnInit } from '@angular/core';
import { menuItems } from '../menu-items';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  name = 'Roman';
  surname = 'Havryliv';

  items = menuItems;
  selectedItem: string;

  constructor() { }

  ngOnInit() {
  }

  onSelect(item: string): void {
    this.selectedItem = item    
  };
}
