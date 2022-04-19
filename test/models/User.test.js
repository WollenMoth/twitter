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
  test("Test getters", () => {
    const user = new User(1, "wollenmoth", "André", "Bio");

    expect(user.getUsername).toBe("wollenmoth");
    expect(user.getBio).toBe("Bio");
    expect(user.getDateCreated).not.toBeUndefined();
    expect(user.getLastUpdated).not.toBeUndefined();
  });
  test("Test setters", () => {
    const user = new User(1, "wollenmoth", "André", "Bio");

    user.setUsername = "andre2908";
    expect(user.username).toBe("andre2908");

    user.setBio = "New bio";
    expect(user.bio).toBe("New bio");
  });
});
