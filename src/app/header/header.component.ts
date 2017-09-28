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

  public searchForm: boolean;
  public propselected: boolean;
  public aboutselected: boolean;

  public setView(event, menuName: string) {
    if (menuName == 'settings') {
      this.propselected = !this.propselected;
      this.aboutselected = false;
    } else if (menuName == 'about') {
      this.propselected = false;
      this.aboutselected = !this.aboutselected;
    }
  }

  searchValues = [
    {
      code: "123"
    },
    {
      code: "456"
    },
    {
      code: "789"
    },
    {
      code: "012"
    }
  ];

  public codeSearch: string;
  public getCode() {
    debugger;
    let matchString;
    let codematch: boolean = false;
    let codesLeng = this.searchValues.length;
    for (let i = 0; i < codesLeng; i++) {    
      matchString = this.searchValues[i].code;
      if (this.codeSearch == matchString) {
        codematch = true;
      }      
    }
    if (codematch) {
      alert('matched');
      this.codeSearch = '';
    } else {
      alert('failed')
    }
  }
}
