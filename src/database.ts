
import pg from 'pg-promise';
import keys from './keys';

const pgp = pg();

// const cn = 'postgres://postgres:contraseña@localhost:5434/ng_games_db';

const db = pgp(keys.database);

export default db;