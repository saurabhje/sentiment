import Sentiment from 'sentiment';

const analyzer = new Sentiment();

export const analyzeTexts = (texts) => {
    return texts.map((text) => analyzeSentiment(text));
};

const analyzeSentiment = (text) => {
    const result = analyzer.analyze(text);
    
    let sentiment = 'neutral';
    if (result.score > 0) {
        sentiment = 'positive';
    } else if (result.score < 0) {
        sentiment = 'negative';
    }
    //normalize confidence to be between 0 and 1
    // This is a simple heuristic and may not be accurate for all texts.
    const confidence = Math.min(1, Math.abs(result.comparative)*2)
    return {
        sentiment,
        confidence
    };
};
