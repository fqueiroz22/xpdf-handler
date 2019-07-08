function convertPDF(path){
  var runExe = require('child_process').execFile

  runExe('pdftotext', ['-table', path], function(err, data) {
    if (err) {
      console.log(err)
    } else console.log('foi')
  })
}

// convertPDF('./extrato.pdf')