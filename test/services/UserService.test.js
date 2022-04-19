const UserService = require("../../app/services/UserService");

describe("Unit Tests for UserService class", () => {
  test("Create a new user using the UserService", () => {
    const user = UserService.create(1, "wollenmoth", "André");

    expect(user.id).toBe(1);
    expect(user.username).toBe("wollenmoth");
    expect(user.name).toBe("André");
    expect(user.bio).not.toBeUndefined();
  });
  test("Get all user data in a list", () => {
    const user = UserService.create(1, "wollenmoth", "André");
    const userInfoList = UserService.getInfo(user);

    expect(userInfoList[0]).toBe(1);
    expect(userInfoList[1]).toBe("wollenmoth");
    expect(userInfoList[2]).toBe("André");
    expect(userInfoList[3]).not.toBeUndefined();
  });
  test("Update username", () => {
    const user = UserService.create(1, "wollenmoth", "André");

    UserService.updateUserUsername(user, "andre2908");
    expect(user.username).toBe("andre2908");
  });
  test("Given a list of users, return a list of usernames", () => {
    const user1 = UserService.create(1, "wollenmoth1", "André");
    const user2 = UserService.create(2, "wollenmoth2", "André");
    const user3 = UserService.create(3, "wollenmoth3", "André");
    const usernames = UserService.getAllUsernames([user1, user2, user3]);

    expect(usernames).toContain("wollenmoth1");
    expect(usernames).toContain("wollenmoth2");
    expect(usernames).toContain("wollenmoth3");
  });
});
