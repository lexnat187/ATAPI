// import express from 'express'
let express = require('express')

let memCache = require('memory-cache')

const atSearchService = require('../services/atSearch')

let api = express.Router()

let cache = (duration) => {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url
    let cachedBody = mcache.get(key)
    if (cachedBody) {
      res.send(cachedBody)
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        mcache.put(key, body, duration * 1000);
        res.sendResponse(body)
      }
      next()
    }
  }
}

/* GET Ounass search facets. */
api.get('/ounassfacets', cache(10), (req, res, next) => {

  atSearchService.getOunassSearchFacets()
    .then((facetResults) => {
      res.status(STATUS.OK).json(facetResults)
    })
    .catch(next)

  // res.send('respond with a resource')
})


/* GET M&P search facets. */
api.get('/mandpfacets', cache(10), (req, res, next) => {

  atSearchService.getMandPSearchFacets()
    .then((facetResults) => {
      res.status(STATUS.OK).json(facetResults)
    })
    .catch(next)

  // res.send('respond with a resource')
})

/* POST search M and P. */
api.post('/mandpsearch', cache(10), (req, res, next) => {

  const searchBody = req.body.search
  atSearchService.getMandPSearchFacets()
    .then((facetResults) => {
      res.status(STATUS.OK).json(facetResults)
    })
    .catch(next)

  // res.send('respond with a resource')
})

/* POST search Ounass. */
api.post('/ounasssearch', cache(10), (req, res, next) => {
  const searchBody = req.body.search
  atSearchService.getMandPSearchFacets()
    .then((facetResults) => {
      res.status(STATUS.OK).json(facetResults)
    })
    .catch(next)

  // res.send('respond with a resource')
})

module.exports = api
