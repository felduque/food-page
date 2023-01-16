import Sequelize from 'sequelize';

const { DB_USER, DB_PASSWORD, DB_HOST, PORT_NUMBER } = process.env;
export const sequelize = new Sequelize(`postgres://hnmkyivk:xYxe-Wp0HdUvni8dyhIC6RqqaO3CEVzv@isilo.db.elephantsql.com/hnmkyivk
`, {
logging: false,
});

// Local 
// postgres://postgres:151623@localhost:5432/food

// Nube
// postgres://hnmkyivk:xYxe-Wp0HdUvni8dyhIC6RqqaO3CEVzv@isilo.db.elephantsql.com/hnmkyivk
