const http = require('http');
const app = require('./controllers/users.controllers');
// set port variable
const port = process.env.PORT || 4000;
app.set('port', port);
// set server to listen on your port variable
const server = http.createServer(app);
server.listen(port, () => { console.log('Listening on port 4000'); } );
