import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   @ViewChild('f',{static: true}) form;
  constructor(
    private router: Router,
    //private authService: AuthService
  ) { }


  ngOnInit() {
  }

  onSubmit() { 
        this.router.navigate(['/userportal']);
    }
}
