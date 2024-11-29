const postPredictHandler = require('../server/handler');

const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,
    options: {
      payload: {
        /*Mengizinkan data berupa gambar*/
        // atribut maxBytes memiliki default value 1048576 (1MB), sehingga kita tidak perlu menuliskan nilai maxBytes.
        allow: 'multipart/form-data',
        multipart: true
      }
    }
  }
]

module.exports = routes;