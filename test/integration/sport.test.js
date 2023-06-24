const request = require('supertest');
const app = require('../../app');

describe('Integration Test for Sport', () => {

    describe('Get all sports, tours, matches', () => {

        it('should return match object with id, format and start time', async () => {

            const response = await request(app).get('/sport/tour/match');
            
            expect(response.status).toBe(200);

            let sport = "Cricket";
            let tour = "Indian Premier League, 2023";

            let responseBody = response.body;
            
            let matches = responseBody[sport][tour];

            expect(matches[0]).toHaveProperty('id');
            expect(matches[0]).toHaveProperty('startTime');
            expect(matches[0]).toHaveProperty('format');

        });

    });

});