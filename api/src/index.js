import app from "./app.js";
import { sequelize } from "./database/db.js";

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(3002);
    console.log("Server on port 3002");
  } catch (error) {
    console.error("Error connecting to database", error);
  }
}
main();
