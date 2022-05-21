const path = require('path');
const fs = require('fs');

const pathToStyles = path.join(__dirname, 'styles');
const pathtoBundle = path.join(__dirname, 'project-dist','bundle.css');
fs.writeFile( pathtoBundle, '',(err) => {
        if (err) throw err;
    }
);


fs.readdir(pathToStyles, {withFileTypes: true},(err, files) => {
    if(err) throw err;
    files.forEach(file=>{
        if(file.name.includes('.css')){
            fs.readFile(path.join(__dirname, 'styles',file.name),'utf-8',(err, data) => {
                if (err) throw err;
                fs.appendFile(
                    pathtoBundle,
                    data,
                    (err) => {
                        if (err) throw err;
                    });
                }
            )
        }
    })
});