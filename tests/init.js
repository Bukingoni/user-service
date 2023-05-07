require('module-alias/register')
require('dotenv').config({ path: `${process.cwd()}/.env-test` });

const { before, after } = require('mocha');
const EntityFactory = require('@entityFactory');

before(async function (done) {
    this.timeout(10000);
    await EntityFactory.init()
    done();
    console.log('end of before()')
});


after(async () => {
    await EntityFactory.close();
});