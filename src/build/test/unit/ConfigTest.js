"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config/config"));
const chai_1 = require("chai");
describe('config', () => {
    it('check db config', (done) => {
        chai_1.assert.typeOf(config_1.default.database, 'object');
        chai_1.assert.typeOf(config_1.default.database.host, 'string');
        chai_1.assert.typeOf(config_1.default.database.port, 'number');
        chai_1.assert.typeOf(config_1.default.database.database, 'string');
        chai_1.assert.typeOf(config_1.default.database.user, 'string');
        chai_1.assert.typeOf(config_1.default.database.password, 'string');
        done();
    });
});
