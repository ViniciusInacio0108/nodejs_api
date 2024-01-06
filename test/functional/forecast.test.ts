describe("Beach forecast functional test", () => {
    it("Should return a forecast with just a few times", async () => {
        const { body, status } = await global.testRequest.get("/forecast/"); 
        expect(status).toBe(200);
        const expected = {};
        expect(body).toEqual(expected);
    });
});