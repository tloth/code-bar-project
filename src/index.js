const feelings = require('./data');
const http = require('http');

const router = (req, res) => {
    let url = req.url;
    if (req.method === 'GET'){
        if (url === '/'){
            res.writeHead(200, {'Content-Type' : 'text/plain'});
            res.end('welcome to our feelings');
        } else if (url === '/feelings'){
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(feelings.feelings));
        }
    }

    if (req.method === 'POST'){
        if (url === '/feelings'){
            // console.log(req);
            
            req.on('data', (data) => {
                try {
                    let parseData = JSON.parse(data.toString('utf8'));

                    feelings.addFeeling(parseData, () => {
                        res.writeHead(200, {'Content-Type': 'text/plain'});
                        res.end('saved your feeling');
                    });
                    
                } catch (error) {
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end('stop tyring to break out server');
                };
        
            });

            
        }
    }
   
}



console.log('welcome to our node project')

const server = http.createServer(router);
const port = 3000;

server.listen(port, () => {
    console.log('server is up and running')
})

