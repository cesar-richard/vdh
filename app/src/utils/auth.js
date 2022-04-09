const auth = {
  isAuthenticated: false,

  init() {
    let token = localStorage.getItem("token");
    this.isAuthenticated = token ? true : false;
  },

  authenticate() {
    this.isAuthenticated = true;
    localStorage.setItem("token", "test");
  },

  signout() {
    localStorage.removeItem("token");
    this.isAuthenticated = false;
  },
};

export default auth;
