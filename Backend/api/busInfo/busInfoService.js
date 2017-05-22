const _ = require('lodash')
const Eletronico = require('./busInfo')

Eletronico.methods(['get', 'post', 'put', 'delete'])

// retornar o valor novo quando der update
Eletronico.updateOptions({new: true, runValidators: true})

Eletronico.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle

  if(bundle.errors) {
    var errors = parseErrors(bundle.errors)
    res.status(500).json({errors})
  } else {
    next()
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = []
  _.forIn(nodeRestfulErrors, error => errors.push(error.message))
  return errors
}

// padronizar os erros
Eletronico.route('count', function(req, res, next) {
  Eletronico.count(function(error, value) {
    if(error) {
      // array de todos os erros
      res.status(500).json({errors: [error]})
    } else {
      res.json({value})
    }
  })
})

module.exports = Eletronico
