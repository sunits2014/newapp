import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  @Input() menuItem: boolean;

  ngOnInit() {
    this.afterLogin = this.menuItem;
  }

  public afterLogin: boolean;
  public logOut() {
    this.router.navigate([''])
  }

}
