const { expect } = require("chai");
const messageController = require("../controllers/messageController");

describe("Message Controller", () => {
  it("should get messages between two users", async () => {
    const req = {
      body: {
        from: "user1",
        to: "user2"
      }
    };

    const res = {
      json: (result) => {
        expect(result).to.be.an("array");
        // Add more assertions as needed
      }
    };

    await messageController.getMessages(req, res, () => {});
  });

  it("should add a new message", async () => {
    const req = {
      body: {
        from: "user1",
        to: "user2",
        message: "Hello"
      }
    };

    const res = {
      json: (result) => {
        expect(result).to.have.property("msg", "Message added successfully.");
        // Add more assertions as needed
      }
    };

    await messageController.addMessage(req, res, () => {});
  });
});
