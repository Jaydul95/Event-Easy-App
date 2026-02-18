const { server } = require("./src/app-server");

const port = 8080;

server.listen(port, () => {
    console.log(`Risk Rating server listening on port ${port}`)
})
