import request from 'supertest';
import app from '../src/app.js';
import { expect } from 'chai';

describe('Sentiment Analysis API', () => {
    it('should return sentiment for a single text input', async () => {
        const res = await request(app)
            .post('/api/sentiment')
            .send({ text: 'I love programming!' });

        expect(res.statusCode).to.equal(200);
        expect(res.body.data[0]).to.have.property('sentiment');
        expect(res.body.data[0]).to.have.property('score');
        expect(res.body.data[0]).to.have.property('confidence');
        expect(res.body.data[0].sentiment).to.equal('positive');
    });
    it('should return sentiment for multiple text inputs', async () => {
        const res = await request(app)
            .post('/api/sentiment')
            .send({ text: ['I love programming!', 'I hate bugs!'] });

        expect(res.statusCode).to.equal(200);
        expect(res.body.data).to.be.an('array').that.has.lengthOf(2);
        expect(res.body.data[0]).to.have.property('sentiment');
        expect(res.body.data[1]).to.have.property('sentiment');
        expect(res.body.data[0].sentiment).to.equal('positive');
        expect(res.body.data[1].sentiment).to.equal('negative');
    });

    it('should reject empty text input', async () => {
        const res = await request(app)
            .post('/api/sentiment')
            .send({ text: '' });

        expect(res.status).to.equal(400);
        expect(res.body).to.have.property('error');
    });
    
    it('should reject non-string text input', async () => {
        const res = await request(app)
            .post('/api/sentiment')
            .send({ text: 12345 });

        expect(res.status).to.equal(400);
        expect(res.body).to.have.property('error');
    });

})