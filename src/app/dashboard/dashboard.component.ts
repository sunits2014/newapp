import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  public headerMenus: boolean;
  public urlString: any;
  ngOnInit() {
    this.urlString = this.route.snapshot.url;
    if(this.urlString == 'dashboard'){
      this.headerMenus = true;
    }else {
      this.headerMenus = false;
    }
  }  

}
