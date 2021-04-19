const Pool = require('pg').Pool
const pool = new Pool({
  user: 'guru',
  host: 'localhost',
  database: 'test1',
  password: 'root',
  port: 5432,
});
module.exports =pool;