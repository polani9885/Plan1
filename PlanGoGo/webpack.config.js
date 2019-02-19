const path = require('path');


module.exports = {
    entry: './CustomScripts/TypeScripts/Main.js',
    output: {
        path: path.resolve(__dirname, 'TypeScriptFiles'),
        filename: 'webpack.js',
        libraryTarget: 'var',
        library: 'EntryPoint'
    },
    
    mode: 'none'
};