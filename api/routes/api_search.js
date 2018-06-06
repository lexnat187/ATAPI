// import express from 'express'
let express = require('express')
let STATUS = require('http-status-codes')

let mcache = require('memory-cache')

const atSearchService = require('../services/atSearch')

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next)
  }

let api = express.Router()

let cache = (duration) => {
  return (req, res, next) => {
    let searchBody = req.body.search ? '/' + req.body.search : ''
    let colour = req.body.colour ? '/' + req.body.colour : ''

    let key = '__express__' + (req.originalUrl || req.url) + searchBody + colour

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
api.get('/ounassfacets', cache(1), asyncMiddleware (async (req, res, next) => {
    let facetResults = await atSearchService.getOunassSearchFacets()
    res.status(STATUS.OK).send(facetResults)
}))


/* GET M&P search facets. */
api.get('/mandpfacets', cache(100), asyncMiddleware (async (req, res, next) => {
    let facetResults = await atSearchService.getMandPSearchFacets()
    res.status(STATUS.OK).json(facetResults)
}))

/* POST search M and P. */
api.post('/mandpsearch', cache(100), asyncMiddleware (async (req, res, next) => {
    const searchBody = req.body.search
    const colour = req.body.colour
    let results = await atSearchService.executeMandPSearch(searchBody, colour)
    res.status(STATUS.OK).json(results)
}))

/* POST search Ounass. */
api.post('/ounasssearch', cache(100), asyncMiddleware (async (req, res, next) => {
    const searchBody = req.body.search
    const colour = req.body.colour
    let results = await atSearchService.executeOunassSearch(searchBody, colour)
    res.status(STATUS.OK).json(results)
}))

module.exports = api
