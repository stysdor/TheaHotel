import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.css']
})
export class SideNavListComponent implements OnInit {

  @Output() closeSideNavigation = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onToggleClose() {
    this.closeSideNavigation.emit();
  }
}
