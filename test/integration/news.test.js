const request = require('supertest');
const app = require('../../app');
const NewsType = require('../../src/enums/NewsType');

describe('Integration tests for News', () => {
    

    describe('Add News', () => {

        let reqBody = {
            title : 'Test news title',
            description : 'test news description'
        }

        it('should return 200 status', async () => {
            let id = 2;
            let newsType = NewsType.MATCH;

            // add news for match
            const addNewsResponse = await request(app)
                .post(`/news?id=${id}&type=${newsType}`)
                .send(reqBody);

            expect(addNewsResponse.status).toBe(200);
            
        });

        it('should return 400 status when req body is missing', async () => {
            let id = 2;
            let newsType = NewsType.TOUR;

            const response = await request(app)
                .post(`/news?id=${id}&type=${newsType}`);

            expect(response.status).toBe(400);
        });

        it('should return 400 status when matchId does not exist', async () => {
            let id = 20;
            let newsType = NewsType.MATCH;

            const response = await request(app)
                .post(`/news?id=${id}&type=${newsType}`)
                .send(reqBody);
            
            expect(response.status).toBe(400);
        });

    });
    
    
    describe('GET request at /news/sport/{id}', () => {

        it('should return 200 status with list of news', async () => {
            let sportId = 1;
            const response = await request(app).get(`/news/sport/${sportId}`);
            expect(response.status).toBe(200);
        });

    });
    
    
    describe('GET request at /news/tour/{id}', () => {

        it('should return 200 status with list of news', async () => {
            let tourId = 1;
            const response = await request(app).get(`/news/tour/${tourId}`);
            expect(response.status).toBe(200);
        });

    });

    describe('GET request at /news/match/{id}', () => {

        it('should return 200 status with list of news', async () => {
            let matchId = 1;
            const response = await request(app).get(`/news/match/${matchId}`);
            expect(response.status).toBe(200);
        });

    });

});