import dotenv from "dotenv";
dotenv.config({ override: true });

import app from "./src/app.js";
import { startMongo } from "./src/db/db.js";

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    console.log("server.js is running");

    await startMongo();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Startup failed. Server not started:", error.message);
  }
}

startServer();
