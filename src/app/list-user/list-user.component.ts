import { ChangeDetectorRef, Component, Inject, PLATFORM_ID } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {

  token: string | null = null;
  username: string | null = null;
  firstName: string | null = null;
  lastName: string | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router, // inject Router
    private cdr: ChangeDetectorRef // ✅ inject ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // ✅ ป้องกัน SSR error
      this.checkLoginStatus();
      // รีเฟรชข้อมูลในตารางเพื่อให้แน่ใจว่า UI ได้รับการอัปเดต
      this.cdr.detectChanges();
    }
  }

  checkLoginStatus() {
    const token = localStorage.getItem('token');
    if (!token) {
      Swal.fire({
        icon: 'warning',
        title: 'No Token Found',
        text: 'You are not logged in. Redirecting to the login page.',
        confirmButtonText: 'OK',
      }).then(() => {
        this.router.navigate(['/login']);
      });
    } else {
      try {
        const decodedToken: any = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        if (decodedToken.exp < currentTime) {
          Swal.fire({
            icon: 'error',
            title: 'Session Expired',
            text: 'Your session has expired. Please log in again.',
            confirmButtonText: 'OK',
          }).then(() => {
            this.router.navigate(['/login']);
          });
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        this.router.navigate(['/login']);
      }
    }
  }

}


