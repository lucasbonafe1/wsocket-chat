import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public userService: UserService;
  public router: Router;
  // public hasUserWithSameName: boolean = false;

  constructor(userService: UserService, router: Router) {
    this.userService = userService;
    this.router = router;
  } 

  onSubmit(username: string) {
  const name = (username || '').trim();
  if (!name) return;

  
  this.userService.postUsername(name).subscribe({
    next: user => {
      localStorage.setItem('userIdLogged', user.key);
      this.router.navigate(['/home']);
    },
    error: err => {
      console.error('Erro ao salvar usuário:', err);
    }
  });
}}
