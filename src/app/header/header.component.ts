import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName: string = '';

  constructor(private authService: AuthService) {
    this.userName = this.authService.getUserName();
  }

  ngOnInit(): void {
    //btt3ml mara wa7da bs
    // this.userName = this.authService.getUserName();

    this.authService.getLoggedName().subscribe(name => {
      this.userName = name
    })
  }

  logout(): void {
    this.authService.logout();
  }

}
