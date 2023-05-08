import app from "./app.js";

const port = app.get("port");

async function main() {
  await app.listen(port);
  console.log("Server running on port ${port}");
}

main();
