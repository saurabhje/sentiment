import { analyzeTexts } from '../services/sentimentService.js';
import logger from '../utils/logger.js';

export const analyzeSentiment = (req, res) => {
    try {
        const input = req.body.text;
        const texts = Array.isArray(input) ? input : [input];
        const results = analyzeTexts(texts);
        return res.status(200).json({
            results
        });
    } catch (error) {
        logger.error('Error analyzing sentiment', {
            error: error.message,
            stack: error.stack,
        })
        return res.status(500).json({
            message: 'An error occurred while analyzing sentiment.',
            details: error.message
        });
    }
}