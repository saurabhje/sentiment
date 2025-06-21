import Sentiment from 'sentiment';

const analyzer = new Sentiment();

export const analyzeTexts = (texts) => {
    return texts.map((t) => analyzeSentinment(t))
};

const analyzeSentinment = (text) =>{
    const result = analyzer.analyze(text);
    let sentimentLabel = 'neutral';
    if (result.score >  0){
        sentimentLabel = 'positive';
    }else if (result.score < 0){
        sentimentLabel = 'negative'
    }
    return{
        text,
        sentiment: sentimentLabel,
        score: result.score,
        compartive: result.compartive
    };
};