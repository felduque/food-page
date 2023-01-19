import dotenv from 'dotenv'
dotenv.config()
import Sequelize from "sequelize";

// const { PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE } = process.env;

export const sequelize = new Sequelize(
  `postgresql://postgres:VSgWeeJMi8w5XO91tHHP@containers-us-west-157.railway.app:6559/railway`,
  {
    logging: false,
  }
);
//postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}
