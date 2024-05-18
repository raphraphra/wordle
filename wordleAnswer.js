const fs = require('fs')

let words = []

fs.readFile('words.txt', 'utf8', (err, data) => {
    for (i = 0; i < data.length; i+=6){
        words.push(data.slice(i, i + 5))
    }
})

setTimeout(() => {
    console.log(words.slice(50))
}, 5000)