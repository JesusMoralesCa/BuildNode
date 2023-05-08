import app from "./app.js";

describe("Test server initialization", () => {
  it("should start the server on the specified port", async () => {
    const port = app.get("port");
    const server = await app.listen(port);
    expect(server).toBeDefined();
    server.close();
  });
});
