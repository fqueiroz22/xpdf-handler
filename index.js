class XPDFHandler{

  convertPDF(path){
    var runExe = require('child_process').spawn

    runExe('pdftotext', ['-layout', path])

    // var runExe = require('child_process').execFile

    // runExe('pdftotext', ['-layout', path], function(err, data) {
    //   if (err) {
    //     console.log(err)
    //   } else console.log('foi')
    // })
  }
}

module.exports = {
  convertPDF: (path) => {
    let treco = new XPDFHandler(path);
    XPDFHandler.convertPDF(path);
  }
}

// convertPDF('./extrato.pdf')