const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    //evita popular demais o banco de teste
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const response = await request(app).post("/ongs").send({
      name: "test",
      email: "contato@contato.com",
      whatsapp: "34999299999",
      city: "uberlandia",
      uf: "mg",
    });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
