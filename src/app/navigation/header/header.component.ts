import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SideNavListComponent } from '../side-nav-list/side-nav-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() SideNavigationToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleOpenSidenav() {
    this.SideNavigationToggle.emit();
  }

}
