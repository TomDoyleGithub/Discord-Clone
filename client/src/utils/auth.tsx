import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    const token:any = this.getToken();
    return decode(token);
  }

  loggedIn() {
    const token:any = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: any) {
    try {
      const decoded:any = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken: any) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();