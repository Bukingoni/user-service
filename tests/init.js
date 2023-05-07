require('module-alias/register')
require('dotenv').config({ path: `${process.cwd()}/.env-test` });

const { before, after } = require('mocha');
const EntityFactory = require('@entityFactory');

before(function (done) {
    this.timeout(10000);
    EntityFactory.init().then(() => {
        console.log('then() in entity factory init')
        setTimeout(() => {
            console.log('setTimeout() in entity factory init')
            done();
        }, 2000);
    });
    console.log('end of before()')
});


after(async () => {
    await EntityFactory.close();
});