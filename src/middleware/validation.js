import logger from '../utils/logger.js';


export const validateInput = (req, res, next) => {
    const input = req.body.text;

    if (!input || (Array.isArray(input) && input.length === 0)) {
        return res.status(400).json({ error: 'Input text cannot be empty' });
    }

    const texts = Array.isArray(input) ? input : [input];
    const errors = [];

    for (let i = 0; i < texts.length; i++) {
        const text = texts[i];

        if (typeof text !== 'string') {
            errors.push(`Item ${i} is not a string.`);
            continue;
        }

        const trimmed = text.trim();
        if (!trimmed) {
            errors.push(`Item ${i} is empty.`);
            continue;
        }
    }

    if (errors.length > 0) {
        logger.warn('Validation failed', {
            input: req.body.text,
            errors,
            path: req.originalUrl
        });
        return res.status(400).json({ error: 'Validation failed', details: errors });
    }
    req.texts = texts;
    next();
};
