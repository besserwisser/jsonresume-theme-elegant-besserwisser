//
// This script will run a local development server. This is useful when
// developing the theme.
//
// Usage:
// `node serve`
//

const http = require('http');
const fs = require('fs');
require('dotenv').config();
console.log(`RESUME_JSON_PATH: ${process.env.RESUME_JSON_PATH}`);
const jsonPath = process.env.RESUME_JSON_PATH || 'node_modules/resume-schema/sample.resume.json';
const resume = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const theme = require('./index.js');
const path = require('path');

const PORT = 8888;

http.createServer(function(req, res) {
    const picture = resume.basics.picture && resume.basics.picture.replace(/^\//, '');

    if (picture && req.url.replace(/^\//, '') === picture.replace(/^.\//, '')) {
        const format = path.extname(picture);
        try {
            const image = fs.readFileSync(picture);
            res.writeHead(200, {
                'Content-Type': `image/${format}`,
            });
            res.end(image, 'binary');
        } catch (error) {
            if (error.code === 'ENOENT') {
                console.log('Picture not found !');
                res.end();
            } else {
                throw error;
            }
        }
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(render());
    }
}).listen(PORT);

console.log(`Preview: http://localhost:${PORT}/`);
console.log('Serving..');

function render() {
    try {
        return theme.render(JSON.parse(JSON.stringify(resume)));
    } catch (e) {
        console.log(e.message);
        return '';
    }
}
