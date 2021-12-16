const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: '849e54d3e1ab497c9b7995e2185135c5',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

app.get('/', (req, res)=>{
    res.sendfile(path.join(__dirname, '../index.html'))
})

app.use(rollbar.errorHandler())

const port = process.env.PORT || 8080;

app.listen(port, ()=> console.log(`Running on port ${port}`))