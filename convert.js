const execFile = require('child_process').execFile

  execFile('pdftotext', ['-table', "./extrato.pdf"], function(err, data) {
    if (err) {
      console.log(err)
    } else console.log('foi')
  })