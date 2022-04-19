const User = require("../../app/models/User");

describe("Unit Tests for User class", () => {
  test("Create an User object", () => {
    const user = new User(
      1,
      "wollenmoth",
      "André",
      "Bio",
      "dateCreated",
      "lastUpdated"
    );

    expect(user.id).toBe(1);
    expect(user.username).toBe("wollenmoth");
    expect(user.name).toBe("André");
    expect(user.bio).toBe("Bio");
    expect(user.dateCreated).toBe("dateCreated");
    expect(user.lastUpdated).toBe("lastUpdated");
  });
});
