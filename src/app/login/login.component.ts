import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginResponse } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  userData?: LoginResponse;
  showPassword: boolean = false; // ✅ เพิ่มตัวแปรเปิด/ปิดรหัสผ่าน
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    this.isLoading = true;
    this.errorMessage = '';
    try {
      this.userData = await this.authService.login(this.username, this.password);
      console.log('Login successful:', this.userData);
      this.router.navigate(['/list-user']);
    } catch (error) {
      console.error('Login failed:', error);
      this.errorMessage = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';
    } finally {
      this.isLoading = false;
    }
  }

  togglePassword() {
    this.showPassword = !this.showPassword; // ✅ สลับระหว่าง text และ password
  }
}
