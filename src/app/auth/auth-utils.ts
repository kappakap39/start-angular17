export class AuthUtils {
  static saveToken(
    token: string,
    userResponse: any,
    username: string,
    firstName: string,
    lastName: string
  ): void {
    // ตรวจสอบว่า token และ userResponse มีค่าหรือไม่ก่อนที่จะบันทึก
    if (token && userResponse) {
      // บันทึกข้อมูลลง localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userResponse', JSON.stringify(userResponse));

      // บันทึกข้อมูล username, firstName, และ lastName ลง localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
    }
  }

  static clearToken(): void {
    // ลบเฉพาะ 'token' ออกจาก localStorage
    // localStorage.removeItem('token');
    // ลบข้อมูลทั้งหมดจาก localStorage
    localStorage.clear();
  }
}
