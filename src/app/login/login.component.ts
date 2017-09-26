import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { transition, style, state, trigger, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // styles: [':host '],
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('toggleAnim', [
      transition(':enter',[
        style({ opacity: '0'}),
        animate('0.15s', style({ opacity: '1'}))
      ]),
      transition(':leave',[
        style({ opacity: '1'}),
        animate('0.15s', style({ opacity: '0'}))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  constructor(public _fb: FormBuilder, public route: Router) { }

  public loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: new FormControl(null, Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(12)])),
      password: new FormControl(null, Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9]*$')]))
    })
  }

  public msgText: string;
  public showOnEvent: boolean;
  public customStyle: Object;
  public login() {
    if(this.loginForm.get('username').value == undefined || "" || this.loginForm.get('password').value == undefined || ""){
      this.showOnEvent = true;
      this.msgText = "Please provide the details.";
      this.customStyle = {
        'color': 'red'
      }
    }else if (this.loginForm.get('username').value == undefined || "") {
      this.showOnEvent = true;
      this.msgText = "Either username is not provided or incorrect.";
      this.customStyle = {
        'color': 'red'
      }
    } else if (this.loginForm.get('password').value == undefined || "") {
      this.showOnEvent = true;
      this.msgText = "Either password is not provided or incorrect.";
      this.customStyle = {
        'color': 'red'
      }
    }
    else {
      this.route.navigate(['dashboard'])
    }
  }

}
