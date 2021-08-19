const { readFile, writeFile } = require('fs')

// Below is read function with callback function 

readFile( './content/first.txt', 'utf8', (err,result)=>{
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if (err) {
            console.log(err)
            return
    }
    const second = result;
    writeFile(
        './content/concatenate-async.txt', 
        `Here is the result : ${first}, ${second}`
        , (err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result);
        }
    )
})
})