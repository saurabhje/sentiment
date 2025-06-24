// test/validation.test.js
import { validateInput } from '../src/middleware/validation.js';
import { expect } from 'chai';

const mockRes = () => {
  const res = {};
  res.status = function (code) {
    this.statusCode = code;
    return this;
  };
  res.json = function (payload) {
    this.body = payload;
    return this;
  };
  return res;
};

describe('Input Validation Middleware', () => {
  it('should reject empty input', () => {
    const req = { body: { text: '' } };
    const res = mockRes();
    const next = () => { throw new Error('Should not be called'); };

    validateInput(req, res, next);
    expect(res.statusCode).to.equal(400);
    expect(res.body).to.have.property('error');
  });

  it('should allow valid input', () => {
    const req = { body: { text: 'This is valid.' } };
    const res = mockRes();
    let calledNext = false;
    const next = () => { calledNext = true; };

    validateInput(req, res, next);
    expect(calledNext).to.be.true;
    expect(req.texts).to.deep.equal(['This is valid.']);
  });
  it('should reject non-string input', () => {
      const req = { body: { text: 12345 } };
      const res = mockRes();
      const next = () => { throw new Error('Should not be called'); };
  
      validateInput(req, res, next);
      expect(res.statusCode).to.equal(400);
      expect(res.body).to.have.property('error');
  });
  
  it('should reject empty strings in array input', () => {
      const req = { body: { text: ['valid text', '', 'another valid text'] } };
      const res = mockRes();
      const next = () => { throw new Error('Should not be called'); };
  
      validateInput(req, res, next);
      expect(res.statusCode).to.equal(400);
      expect(res.body).to.have.property('error');
  });
  
  it('should reject non-string items in array input', () => {
      const req = { body: { text: ['valid text', 123, 'another valid text'] } };
      const res = mockRes();
      const next = () => { throw new Error('Should not be called'); };
  
      validateInput(req, res, next);
      expect(res.statusCode).to.equal(400);
      expect(res.body).to.have.property('error');
  });
});