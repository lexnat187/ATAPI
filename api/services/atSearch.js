const axios = require('axios')

   const getOunassSearchFacets = async () => {
    try {
        let response = await axios.get('https://www.ounass.ae/directory/colors')
        if (response && response.status === 200) {
          return response.data
        } else {
          return 'No data for facet filters'
        }
    } catch (error) {
        return 'No data for facet filters'
    }

  }

  const getMandPSearchFacets = async () => {
    try {
      let response = await axios.get('https://www.mamasandpapas.ae/directory/colors')
      if (response && response.status === 200) {
        return response.data
      } else {
        return 'No data for facet filters'
      }
    } catch (error) {
        return 'No data for facet filters'
    }

  }

  const executeOunassSearch = async (searchBody, colour) => {
  
    // curl -X POST https://www.ounass.ae/search/full\?searchString\=\&filters\[availableColors\]\[\]\=Red -g 
    try {
      let url = `https://www.ounass.ae/search/full\?searchString\=${searchBody}\&filters\[availableColors\]\[\]\=${colour} `
      let response = await axios.post(url)
      if (response && response.status === 200) {
        return response.data
      } else{
        return 'No data for search'
      }
    } catch (error) {
        return 'No data for search'
    }


  }

  const executeMandPSearch = async (searchBody, colour) => {
  
    // curl -X POST https://www.mamasandpapas.ae/search/full\?searchString\=\&filters\[availableColors\]\[\]\=Red -g
    try {
      let url = `https://www.mamasandpapas.ae/search/full\?searchString\=${searchBody}\&filters\[availableColors\]\[\]\=${colour}`
      let response = await axios.post(url)
      if (response && response.status === 200) {
        return response.data
      } else {
        return 'No data for search'
      }
    } catch (error) {
        return 'No data for search'
    }
  }

  module.exports = {
    getOunassSearchFacets,
    getMandPSearchFacets,
    executeOunassSearch,
    executeMandPSearch
  }
  