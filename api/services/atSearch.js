let request = require('request')

   const getOunassSearchFacets = () => {
  
    return new Promise((resolve, reject) => {
      request({
        url: 'https://www.ounass.ae/directory/colors',
        method: 'GET'
      }, (err, response, body) => {
        if (response && response.statusCode === 200) {
          return resolve(body)
        }
  
        return reject(new Errors.SearchError())
      })
    })
  }

  const getMandPSearchFacets = () => {
  
    return new Promise((resolve, reject) => {
      request({
        url: 'https://www.mamasandpapas.ae/directory/colors',
        method: 'GET'
      }, (err, response, body) => {
        if (response && response.statusCode === 200) {
          return resolve(body)
        }
  
        return reject(new Errors.SearchError())
      })
    })
  }

  const executeOunassSearch = (searchBody, colour) => {
  
    // curl -X POST https://www.ounass.ae/search/full\?searchString\=\&filters\[availableColors\]\[\]\=Red -g 
    return new Promise((resolve, reject) => {
      request({
        url: `https://www.ounass.ae/search/full\?searchString\=${searchBody}\&filters\[availableColors\]\[\]\=${colour} `,
        method: 'POST'
      }, (err, response, body) => {
        if (response && response.statusCode === 200) {
          return resolve(body)
        }
  
        return reject(new Errors.SearchError())
      })
    })
  }

  const executeMandPSearch = (searchBody, colour) => {
  
    // curl -X POST https://www.mamasandpapas.ae/search/full\?searchString\=\&filters\[availableColors\]\[\]\=Red -g
    return new Promise((resolve, reject) => {
      request({
        url: `https://www.mamasandpapas.ae/search/full\?searchString\=${searchBody}\&filters\[availableColors\]\[\]\=${colour}`,
        method: 'POST'
      }, (err, response, body) => {
        if (response && response.statusCode === 200) {
          return resolve(body)
        }
  
        return reject(new Errors.SearchError())
      })
    })
  }

  module.exports = {
    getOunassSearchFacets,
    getMandPSearchFacets,
    executeOunassSearch,
    executeMandPSearch
  }
  