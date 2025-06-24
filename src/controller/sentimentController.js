import { analyzeTexts } from '../services/sentimentService.js';
import logger from '../utils/logger.js';

export const analyzeSentiment = (req, res) => {
    try {
        const results = analyzeTexts(req.texts);
        return res.status(200).json({
            data: results
        });
    } catch (error) {
        logger.error('Error analyzing sentiment', {
            error: error.message,
            stack: error.stack,
        })
        return res.status(500).json({
            sucess: false,
            message: 'An error occurred while analyzing sentiment.',
            details: error.message
        });
    }
}