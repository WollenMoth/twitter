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
});
