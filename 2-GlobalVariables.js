// GLOBAL VARIABLE -- NO BROWSER WINDOW!!

// __dirname   - path to current directory
// __filename  - file name
// require     - Function to use modules (CommonJS)
// module      - info about current module (file)
// process     - info about environment where the program is being executed.

console.log(__dirname)

// below function to print "Hello World" at every second

setInterval(() => {
    console.log('hello world!!')
}, 1000)