import { Routes } from '@angular/router';
import { ChatComponent } from '../pages/chat/chat.component';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'chat', component: ChatComponent },
];
