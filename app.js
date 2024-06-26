const express = require('express');
const app = express();
const port = 80;

// Endpoint for Prometheus metrics
app.get('/metrics', (req, res) => {
    res.set('Content-Type', 'text/plain');
    res.send(`# HELP nodejs_app_requests_total The total number of processed requests
TYPE nodejs_app_requests_total counter
nodejs_app_requests_total{status="success"} 1
nodejs_app_requests_total{status="failure"} 0`);
});

// A simple health check endpoint
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});