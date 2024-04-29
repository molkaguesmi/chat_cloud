const { expect } = require("chai");
const userController = require("../controllers/userController");

describe("User Controller", () => {
  it("should login with correct credentials", async () => {
    const req = {
      body: {
        username: "validusername",
        password: "validpassword"
      }
    };

    const res = {
      json: (result) => {
        expect(result).to.have.property("status", true);
        expect(result).to.have.property("user");
        // Add more assertions as needed
      }
    };

    await userController.login(req, res, () => {});
  });

  it("should not login with incorrect credentials", async () => {
    const req = {
      body: {
        username: "invalidusername",
        password: "invalidpassword"
      }
    };

    const res = {
      json: (result) => {
        expect(result).to.have.property("status", false);
        expect(result).to.have.property("msg", "Incorrect Username or Password");
        // Add more assertions as needed
      }
    };

    await userController.login(req, res, () => {});
  });

  it("should register a new user", async () => {
    const req = {
      body: {
        username: "newusername",
        email: "newuser@example.com",
        password: "newpassword"
      }
    };

    const res = {
      json: (result) => {
        expect(result).to.have.property("status", true);
        expect(result).to.have.property("user");
        // Add more assertions as needed
      }
    };

    await userController.register(req, res, () => {});
  });

  it("should set avatar for a user", async () => {
    const req = {
      params: {
        id: "userId"
      },
      body: {
        image: "avatarImage"
      }
    };

    const res = {
      json: (result) => {
        expect(result).to.have.property("isSet", true);
        expect(result).to.have.property("image", "avatarImage");
        // Add more assertions as needed
      }
    };

    await userController.setAvatar(req, res, () => {});
  });

  it("should log out a user", async () => {
    const req = {
      params: {
        id: "userId"
      }
    };

    const res = {
      status: (statusCode) => {
        expect(statusCode).to.equal(200);
        // Add more assertions as needed
        return {
          send: () => {}
        };
      }
    };

    await userController.logOut(req, res, () => {});
  });

  it("should get all users except the current one", async () => {
    const req = {
      params: {
        id: "currentUserId"
      }
    };

    const res = {
      json: (result) => {
        expect(result).to.be.an("array");
        // Add more assertions as needed
      }
    };

    await userController.getAllUsers(req, res, () => {});
  });
});
