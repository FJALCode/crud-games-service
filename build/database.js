"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_promise_1 = __importDefault(require("pg-promise"));
const keys_1 = __importDefault(require("./keys"));
const pgp = pg_promise_1.default();
const db = pgp(keys_1.default.database);
exports.default = db;
