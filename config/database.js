import Sequelize from 'sequelize';


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql'
});

export default sequelize;