require("module-alias/register");
require("dotenv").config({ path: `${process.cwd()}/.env-test` });

const { describe, it } = require("mocha");
const expect = require("expect.js");
const crypto = require("crypto");

const EntityFactory = require("@entityFactory");

let errorCounter = 0;

const res = {
  status: (statusCode) => {
    return {
      send: (result) => {
        return { statusCode, result };
      },
    };
  },
};
const next = (error) => {
  errorCounter++;
  return error;
};

describe("User test", function () {
  this.beforeEach(async () => {
    errorCounter = 0;
  });

  this.beforeAll(async () => {
    await init();
  });

  this.afterAll(async () => {
    await EntityFactory.emptyDatabase();
  });

  it("Should return true for tests", async function () {
    expect(true).to.be.equal(true);
  });

  it("Should return false for tests", async function () {
    expect(false).to.be.equal(false);
  });
});

const init = async () => {
  const User = await EntityFactory.getEntity("User");
  const user = await User.create({
    FirstName: "John",
  });
};
