import app from "./app.js";
import { sequelize } from "./database/db.js";
import * as dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 3001;

async function main() {
  try {
    await sequelize.sync({ force: true });
    app.listen(port);
    console.log(`Server on port ${port}`);
  } catch (error) {
    console.error("Error connecting to database", error);
  }
}
main();
