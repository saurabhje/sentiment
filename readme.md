# Sentiment Analysis REST API (Node.js)
A production-ready RESTful API for performing sentiment analysis on text using Node.js and Express.

---
## Features

- Single endpoint: `POST /api/sentiment`
- Handles single and batch text inputs
- Input validation:
  - Empty or non-string input
  - Non-English text
- Returns sentiment (`positive`, `neutral`, `negative`) with confidence score
- Rate limiting to prevent abuse
- Logging with Winston (requests and errors)
- Jest-based unit testing
- Modular architecture following best practices

---

## Installation

```bash
git clone https://github.com/saurabhje/sentiment-analysis-api.git
cd sentiment-analysis-api
npm install
```

## Project Structure

```text
sentiment-analysis-api/
├── logs/
│   ├── error.log
│   ├── exceptions.log
│   └── rejections.log
├── src/
│   ├── app.js
│   ├── controllers/
│   │   └── sentimentController.js
│   ├── routes/
│   │   └── sentimentRoute.js
│   ├── services/
│   │   └── sentimentService.js
│   ├── middleware/
│   │   ├── validation.js
│   │   ├── errorHandler.js
│   │   ├── requestLogger.js
│   │   └── ratelimiter.js
│   └── utils/
│       └── logger.js
├── test/
│   ├── sentiment.test.js 
│   ├── sentimentService.test.js
│   └── validation.test.js
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## Usage

### Running the Server

```bash
npm start
```
or
```bash
node server.js
```

The server will start on port 3000 by default.

---

## API Endpoint

### POST `/api/sentiment`

#### Request Body

For single text:
```json
{
  "text": "I love this product!"
}
```

For batch texts:
```json
{
  "text": [
    "I love this product!",
    "This is terrible.",
    "It's okay, not great."
  ]
}
```

#### Response

```json
{
  "results": [
    {
      "text": "I love this product!",
      "sentiment": "positive",
      "confidence": 0.98
    },
    {
      "text": "This is terrible.",
      "sentiment": "negative",
      "confidence": 0.95
    },
    {
      "text": "It's okay, not great.",
      "sentiment": "neutral",
      "confidence": 0.75
    }
  ]
}
```

#### Error Response Example

```json
{
  "error": "Validation failed",
  "details": [
    "Item 0 is empty.",
    "Item 1 is not a string."
  ]
}
```

---

## Running Tests

Unit tests are written using Mocha.

```bash
npm test
```

Test files are located in the `test/` directory and cover validation, service logic, and endpoint responses.

---

## Logging
All requests and errors are logged using Winston. Log files are stored in the `logs/` directory.
---