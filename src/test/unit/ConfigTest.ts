import config from '../../config/config';
import {assert} from 'chai'

describe('config', () => {
	it('check db config', (done) => {        
		assert.typeOf(config.database, 'object');
		assert.typeOf(config.database.host, 'string');
		assert.typeOf(config.database.port, 'number');
		assert.typeOf(config.database.database, 'string');
		assert.typeOf(config.database.user, 'string');
		assert.typeOf(config.database.password, 'string');
		done();
	});
});
