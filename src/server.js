const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandler.getIndex2(request, response);
      break;
    case '/page3':
      htmlHandler.getIndex3(request, response);
      break;
    case '/party.mp4':
      mediaHandler.getMedia(request, response, 'video/mp4');
      break;
    case '/bling.mp3':
      mediaHandler.getMedia(request, response, 'audio/mpeg');
      break;
    case '/bird.mp4':
      mediaHandler.getMedia(request, response, 'video/mp4');
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
