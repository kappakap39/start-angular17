import { Injectable } from '@angular/core';
import axios from 'axios';
import { LoginResponse } from '../models/login';
import { AuthUtils } from '../auth/auth-utils';  // Import AuthUtils

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:523/ccet/api/loginUserController';

  async login(username: string, password: string): Promise<LoginResponse> {
    try {
      const response = await axios.post<LoginResponse>(this.apiUrl, { username, password });

      // บันทึก Token และข้อมูลผู้ใช้เพิ่มเติม โดยใช้ AuthUtils
      AuthUtils.saveToken(
        response.data.token,
        response.data.userResponse,
        response.data.username,
        response.data.firstName,
        response.data.lastName
      );

      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed');
    }
  }
}
