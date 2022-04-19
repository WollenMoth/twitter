class UserView {
  static createUser(payload) {
    if (!payload) return { error: "El payload no existe" };

    const { id, username, name } = payload;

    if (typeof(id) !== "number" || typeof(username) !== "string" || typeof(name) !== "string")
      return { error: "Las propiedades del payload necesitan tener un valor válido" };
  }
}

module.exports = UserView;
