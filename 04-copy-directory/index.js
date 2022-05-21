const path = require('path');
const fs = require('fs');
const pathToFiles = path.join(__dirname, 'files');

function copyDir(){
    fs.mkdir(path.join(__dirname,'files-copy'),{recursive:true},  err => {
        if (err) throw err;
    });
    fs.readdir(pathToFiles, {withFileTypes: true},(err, files) => {
        if(err) throw err;
        files.forEach(file=>{
            let inputPath =  path.join(__dirname, 'files',file.name);
            let outputPath = path.join(__dirname, 'files-copy',file.name);
            fs.copyFile(inputPath,outputPath,(err=>{
                if(err) throw err;
            }))
        })
    });
}

copyDir();
