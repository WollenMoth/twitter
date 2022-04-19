class UserView {
  static createUser(payload) {
    if (!payload) return { error: "El payload no existe" };
  }
}

module.exports = UserView;
