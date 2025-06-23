# 🧠 Sentiment Analysis REST API (Node.js)

A robust, production-ready RESTful API for performing sentiment analysis on text using Node.js and Express.

---

## 🚀 Features

- ✅ Single endpoint: `POST /api/sentiment`
- ✅ Handles single and batch text inputs
- ✅ Validates for:
  - Empty or non-string input
  - Non-English text
  - Emojis/symbol-only strings
  - Excessively long text
- ✅ Returns sentiment (`positive`, `neutral`, `negative`) with confidence score
- ✅ Rate limiting (to prevent abuse)
- ✅ Logging with Winston (requests and errors)
- ✅ Jest-based unit testing
- ✅ Follows best practices in modular architecture

---

## 📦 Installation

```bash
git clone https://github.com/saurabhje/sentiment-analysis-api.git
cd sentiment-analysis-api
npm install
```

## 📁 Project Structure

```text
sentiment-analysis-api/
├── server.js
├── routes/
│   └── sentiment.js            
├── controllers/
│   └── sentimentController.js 
├── services/
│   └── sentimentService.js  
├── middleware/
│   ├── logger.js            
│   ├── rateLimiter.js
│   └── validation.js
├── utils/
│   └── languageDetector.js
├── logs/
│   └── error.log
├── tests/
│   └── sentiment.test.js
├── package.json
├── .gitignore
└── README.md
```
