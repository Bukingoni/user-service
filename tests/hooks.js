require('module-alias/register')
require('dotenv').config({ path: `${process.cwd()}/.env-test` });

const EntityFactory = require('@entityFactory');

exports.mochaHooks = {
    beforeAll: [
        async function () {
            await EntityFactory.init()
        }
    ],
    afterAll: [
        async function () {
            await EntityFactory.close();
        }
    ]
  };
