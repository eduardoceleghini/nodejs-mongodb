const app = require('./src/express')
const port = process.env.PORT || 3000

let server = app.listen(port, () => {
    let host = server.address().address
    let port = server.address().port

    console.log("Application listening at http://%s:%s", host, port)
})