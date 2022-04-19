const User = require("../../app/models/User");

describe("Unit Tests for User class", () => {
  test("Create an User object", () => {
    const user = new User(1, "wollenmoth", "André", "Bio");

    expect(user.id).toBe(1);
    expect(user.username).toBe("wollenmoth");
    expect(user.name).toBe("André");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).not.toBeUndefined();
    expect(user.lastUpdated).not.toBeUndefined();
  });
});
