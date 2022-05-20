
const path = require('path');
const fs = require('fs');
const pathToSecret = path.join(__dirname, 'secret-folder');
fs.readdir(pathToSecret, {withFileTypes: true},(err, files) => {
  if(err) throw err;
  files.forEach(file => {
    let result = '';
    if(!file.isDirectory()){
      let name = file.name.indexOf('.');
      let ext = path.extname(file.name).indexOf('.');
      let pathToFile = path.join(__dirname, 'secret-folder',file.name);
      fs.stat(pathToFile, (err, stats) => {
        if (err) {
          throw err;
        }
        result+=file.name.slice(0,name) + ' - ';
        result+=path.extname(file.name).slice(++ext) + ' - ';
        result+= Math.ceil((stats.size/1000))+'kb';
        console.log(result);
      });
    }
  });
});
