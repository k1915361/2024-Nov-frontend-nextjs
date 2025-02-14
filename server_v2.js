// Cookie CSRFToken

var https = require('https');
var fs = require('fs');

const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3002
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: __dirname })
const handle = app.getRequestHandler()

var options = {
    key: fs.readFileSync('./localhost+1-key.pem'),
    cert: fs.readFileSync('./localhost+1.pem'),
    // ca: [fs.readFileSync('root.crt')]
};

app.prepare().then(() => {
    https.createServer(options, (req, res) => {
        handle(req, res); 
    }).listen(port, err => {
        if (err) throw err
        console.log(`> Ready on https://localhost:${port}`)
    })
})