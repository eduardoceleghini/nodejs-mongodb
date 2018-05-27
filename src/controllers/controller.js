const Model = require('../models/model')

module.exports = {
  create: (req, res, next) => {
    let model = new Model(req.body)

    model.save()
      .then(saved => res.json(saved))
      .catch(e => next(e))
    
  },

  find: (req, res, next) => {
    Model.findById(req.params.id)
      .then(user => res.json(user))
      .catch(e => next(e))
  },

  findAll: (req, res) => {
    Model.find()
      .then(users => res.json(users))
      .catch(e => next(e))
  },

  update: (req, res, next) => {
    Model.findById(req.params.id)
      .then( found => {
        found.set(req.body)
        found.save()
          .then(saved => res.json(saved))
          .catch(e => next(e))
      })
      .catch(e => next(e))
  },

  delete: (req, res) => {
    Model.findByIdAndRemove(req.params.id)
      .then(deleted => {
        res.json({
          message: 'Deleted',
          id: deleted._id
        })
      })
      .catch(e => next(e))
  }
}