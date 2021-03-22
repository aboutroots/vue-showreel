import store from 'store';

/**
 * Utility facade for storing authorization token in localStorage
 * on different devices via storejs package
 */
class TokenManager {
  constructor() {
    this.token = store.get('token', null);
  }

  set(token) {
    this.token = token;
    store.set('token', token);
  }

  get() {
    return this.token;
  }

  delete() {
    store.remove('token');
    this.token = null;
  }
}

export default new TokenManager();
