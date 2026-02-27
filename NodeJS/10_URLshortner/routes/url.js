const express = require('express')
const router = express.Router()

const {
    handleGenerateNewShortenURL,
    handleAnalytics
} = require('../controllers/url')

router.post('/', handleGenerateNewShortenURL)

router.get('/analytics/:shortID', handleAnalytics)

module.exports = router