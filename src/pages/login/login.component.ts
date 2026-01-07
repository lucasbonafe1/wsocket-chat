import { Component } from '@angular/core';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  } 

  onSubmit(username: string){
    const name = (username || '').trim();
    if(!name) return;

    let userExists = this.userService.getUserByName(name);
    if(userExists) return;

    try { 
      localStorage.setItem('username', name); 
      this.userService.postUsername(name).subscribe();

      // redirecionar pra homepage
    } catch(e) {
      console.log('Erro ao salvar nome no localStorage:', e);
    }
  }
}
