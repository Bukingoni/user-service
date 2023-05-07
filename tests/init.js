require('module-alias/register')
require('dotenv').config({ path: `${process.cwd()}/.env-test` });

const { before, after } = require('mocha');
const EntityFactory = require('@entityFactory');

before(function (done) {
    this.timeout(7000);
    EntityFactory.init().then(() => {
        setTimeout(() => {
            done();
        }, 5000);
    });
});


after(async () => {
    await EntityFactory.close();
});