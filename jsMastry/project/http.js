const http = require('http');
const fs = require('fs');
const path = require('path');
const url=require('url');
const PORT = 3000;

    const myServer= http.createServer((req, res) => {
if(req.url === '/fevicon.ico') return res.end()
    const log=`${Date.now()} - ${req.method} - ${req.url} new request received`;
const myurl= url.parse(req.url);
console.log(myurl);
fs.appendFile('server.log', log + '\n', (err) => {     
        console.log(err ? 'Error writing to log file' : 'Log written successfully');
    })

    
});


myServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);  