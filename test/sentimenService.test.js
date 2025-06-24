// test/sentimentService.test.js
import { expect } from 'chai';
import { analyzeTexts } from '../src/services/sentimentService.js';

describe('Sentiment Service', () => {
  it('should classify positive sentiment', () => {
    const result = analyzeTexts(['I love testing'])[0];
    expect(result.sentiment).to.equal('positive');
  });

  it('should classify negative sentiment', () => {
    const result = analyzeTexts(['I hate bugs'])[0];
    expect(result.sentiment).to.equal('negative');
  });

  it('should classify neutral sentiment', () => {
    const result = analyzeTexts(['The code is running'])[0];
    expect(result.sentiment).to.equal('neutral');
  });

  it('should return a confidence score between 0 and 1', () => {
    const result = analyzeTexts(['I love APIs'])[0];
    expect(result.confidence).to.be.within(0, 1);
  });
});
