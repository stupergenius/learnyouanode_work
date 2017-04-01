var fs = require('fs');

module.exports = function(directory, ext, cb) {
  let filterExt = '.' + ext;

  fs.readdir(directory, (err, files) => {
    if (err) { cb(err, null); return; };

    let filtered_files = files.filter(file => {
      return file.indexOf(filterExt) != -1;
    });
    cb(null, filtered_files);
  });
}
