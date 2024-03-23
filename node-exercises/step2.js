const fs = require('fs');
const process = require('process');
const axios = require('axios')

function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
        console.error(`Error Reading ${path}: ${err}`);
        process.exit(1); // exit the process
        } else {
        console.log(data);
        }
    });
}

async function webCat(url){
    try{
    let reply = await axios.get(url)
    console.log(reply.data)
    }
    catch(e){
        console.error(`Error fetching ${url}`)
    }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}