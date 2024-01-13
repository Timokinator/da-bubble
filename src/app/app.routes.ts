import { Routes } from '@angular/router';
//pre-login components
import { LogInComponent } from './pre-login-components/log-in/log-in.component';
import { SignUpComponent } from './pre-login-components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pre-login-components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pre-login-components/reset-password/reset-password.component';
import { ChooseAvatarComponent } from './pre-login-components/choose-avatar/choose-avatar.component';

//post-login components

//guards
import { authGuard } from './services/auth.guard';
//services


export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'signup', component: SignUpComponent },
    { path: 'login', component: LogInComponent },
    { path: 'choose-avatar', component: ChooseAvatarComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: '**', component: LogInComponent}                            //catch all other routes and redirect to login
];
