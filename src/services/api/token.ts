import store from 'store';

/**
 * Utility facade for storing authorization token in localStorage
 * on different devices via storejs package
 */
class TokenManager {
  token: string | null;

  constructor() {
    this.token = store.get('token', null);
  }

  set(token: string): void {
    this.token = token;
    store.set('token', token);
  }

  get(): string | null {
    return this.token;
  }

  delete(): void {
    store.remove('token');
    this.token = null;
  }
}

export default new TokenManager();
