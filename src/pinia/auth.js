import {defineStore} from 'pinia';

export const authStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: localStorage.getItem('isAuthenticated') ? JSON.parse(localStorage.getItem('isAuthenticated')) : false,
  }),
  actions: {
    login() {
      this.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
    },
    logout() {
      this.isAuthenticated = false;
      localStorage.setItem('isAuthenticated', JSON.stringify(false));
    },
  }
});