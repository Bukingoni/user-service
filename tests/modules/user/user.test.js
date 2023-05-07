require('module-alias/register');
require('dotenv').config({ path: `${process.cwd()}/.env-test` });

const { describe, it } = require('mocha');
const expect = require('expect.js');
const crypto = require('crypto');

const EntityFactory = require('@entityFactory');

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

describe('User test ', function () {
  this.beforeEach(async () => {
    errorCounter = 0;
    await init();
  });

  this.afterAll(async () => {
    console.log('afterAll inside tests');
  });

  it('Should return true for tests', async function () {
    expect(true).to.be.equal(true);
  });

  it('Should return false for tests', async function () {
    expect(false).to.be.equal(true);
  })
});

const init = async () => {
    console.log('init');
}