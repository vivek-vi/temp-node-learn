const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first, second)
// below is the new file write has name 'concatenate.txt' by combining files 'first.txt' & 'second.txt'
// node will create a file if it's not there & overwrite if it's there. We can append the existing file
// using 'a' flag like { 'flag': 'a'} just after 2'nd argument i.e. `here...` separated by comma
writeFileSync(
    './content/concatenate.txt', `Here is the result: ${first}, ${second}`
    )