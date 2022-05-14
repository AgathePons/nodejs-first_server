const http = require('http');

const greetings = ['hello', 'hola', 'bonjour', 'allo', 'ciao', 'こんにちは'];

const sayHello = () => {
  const getRandomIndex = Math.floor(Math.random() * greetings.length);
  //console.log(getRandomIndex);
  return greetings[getRandomIndex];
};

// handle requests
const ceQueJeFaisQuandJeReçoisUneDemande = (request, response) => {
  if (request.url != '/favicon.ico') {
    console.log(request.url);
  }
  // prepare the response
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.write('<h1>');
  response.write(sayHello()); // write a response to the client
  response.write(' Jean-Michel');
  response.write('</h1>');
  response.end(); // send the response
};

// create a server object
const server = http.createServer(ceQueJeFaisQuandJeReçoisUneDemande);

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`I listen ${PORT}`);
});