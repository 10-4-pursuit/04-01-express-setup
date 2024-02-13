const request = require('supertest');
const app = require('../index'); // Path to your index.js file

describe("Express Server", () => {
  test("GET / - responds with 'Welcome to my first Express server!'", async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Welcome to my first Express server!');
  });

  test("GET /about - responds with JSON containing name and age", async () => {
    const response = await request(app).get('/about');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(expect.objectContaining({
      name: expect.any(String),
      age: expect.any(Number)
    }));
  });
});
