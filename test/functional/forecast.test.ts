import supertest from 'supertest';

describe("Beach forecast functional test", () => {
    it("Should return a forecast with just a few times", async () => {
        const { body, status } = await supertest(app).get("/forecast"); 
        expect(status).toBe(200);
        const expected = {};
        expect(body).toBe(expected);
    });
});