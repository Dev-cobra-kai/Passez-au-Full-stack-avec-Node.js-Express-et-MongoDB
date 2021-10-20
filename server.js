const http = require("http");

const server = http.createServer((request, response) => {
    response.end("Voila la reponse du serveur !!!");
});

server.listen(process.env.PORT || 3000);

