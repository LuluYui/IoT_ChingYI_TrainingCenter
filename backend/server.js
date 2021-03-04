const csv = require('csv-parser');
const fs = require('fs')
const http = require('http')
const express = require('express')

const app = express()

const GTCL_1 = 'WSD-GTCL-001_202102231056.csv'
const GTCL_2 = 'WSD-GTCL-002_202102231103.csv'

var results = []
var data = ""

// server config
const hostname = '127.0.0.1'
const port = 5000

let filesystem = fs.createReadStream(GTCL_1)
    .pipe(csv())
    .on('data', (row) => {
        results.push(row)
    })
    .on('end', (result) => {
        console.log('CSV file sucessfully processed')
    })

const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.write(results)
    res.end('Hello world\n')
})

app.get('/', (req, res) => {
    res.send(results);

});

app.listen(port+1, () => console.log(`Testing the app express api is listening on ${port}`))
