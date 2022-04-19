const UserService = require("../../app/services/UserService");

describe("Unit Tests for UserService class", () => {
  test("Create a new user using the UserService", () => {
    const user = UserService.create(1, "wollenmoth", "André");

    expect(user.id).toBe(1);
    expect(user.username).toBe("wollenmoth");
    expect(user.name).toBe("André");
    expect(user.bio).not.toBeUndefined();
  });
});
