const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cookieParser = require('cookie-parser')
const https = require('https');
const dev = process.env.NODE_ENV !== 'production'; // Set to true for development
const fs = require('fs');
const app = next({ dev });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 3002;
// Certificate and key for HTTPS (for local development)
const cert = fs.readFileSync('./localhost+1.pem');
const key = fs.readFileSync('./localhost+1-key.pem');

const apiProxy = createProxyMiddleware({
    target: 'https://localhost:8000',
    changeOrigin: true,
    cookieDomainRewrite: "localhost",
    pathRewrite: {
        '^/api': '/api',
    },
    onProxyReq: (proxyReq, req) => {
        if (req.headers.cookie) {
            proxyReq.setHeader('cookie', req.headers.cookie);
        }
    },
});

app.prepare().then(() => {
    const server = express();
    server.use(cookieParser())
    server.use('/api', apiProxy);
    
    server.all('*', (req, res) => { // Handle all other requests with Next.js
        return handle(req, res);
    });
    const httpsServer = https.createServer({ cert, key }, server);

    httpsServer.listen(port, (err) => { // Start the server
        if (err) throw err;
        console.log(`> Ready on https://localhost:${port}`);
    });

});
