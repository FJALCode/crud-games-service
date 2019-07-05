const { assert } = require('chai');
const config = require('../../build/config/config.js');


describe('config', () => {
	it('check db config', (done) => {
		assert.typeOf(config.default.database, 'object');
		assert.typeOf(config.default.database.host, 'string');
		assert.typeOf(config.default.database.port, 'number');
		assert.typeOf(config.default.database.database, 'string');
		assert.typeOf(config.default.database.user, 'string');
		assert.typeOf(config.default.database.password, 'string');
		done();
	});

	
});
