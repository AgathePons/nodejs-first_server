const http = require('http');

const languagesPath = ['/en', '/es', '/fr'];
const greetings = ['Hello', 'Hola', 'Bonjour'];

const helloList = {
  en: 'Hello',
  es: 'Hola',
  fr: 'Bonjour',
  it: 'Ciao',
  jp: 'こんにちは',
};

// create a server object
const server = http.createServer((req, res) => {
  if (req.url !== '/favicon.ico') {
    console.log(req.url);
  }
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  switch (req.url) {
    case '/':
      res.write(greetings[0]);
      break;
    case languagesPath[0]:
    case languagesPath[1]:
    case languagesPath[2]:
      const lang = req.url.substr(1);
      const helloTransleted = helloList[lang];
      res.write(helloTransleted);
      break;
    default:
      res.write('404');
      break;
  }
  res.end();
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`listen: ${PORT}`);
});