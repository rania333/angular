import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string;
  // pass: string = '';
  isLogged: boolean = false;
  constructor(private authService: AuthService, private router:Router) {
    this.userName = '';
  }

  ngOnInit(): void {
  }
  login(uName: string, pass: string): void {
    if(uName != '' && pass != '') {
      this.authService.login(uName, pass);
      this.userName = this.authService.getUserName();
      this.isLogged = this.authService.isLogged();
      this.router.navigate(['/products'])
    }
  }

  // logout(): void {
  //   this.authService.logout();
  //   this.userName = this.authService.getUserName();
  //   this.isLogged = this.authService.isLogged();
  // }
}
