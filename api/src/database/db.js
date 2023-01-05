import Sequelize from 'sequelize';

// const { DB_USER, DB_PASSWORD, DB_HOST, PORT_NUMBER } = process.env;
export const sequelize = new Sequelize(`postgres://dwmpucok:kKHUUKmVrkcVVVzTe30Wkq9ZL4ueXEwr@berry.db.elephantsql.com/dwmpucok`, {
  logging: true,
});




// postgres://dwmpucok:kKHUUKmVrkcVVVzTe30Wkq9ZL4ueXEwr@berry.db.elephantsql.com/dwmpucok