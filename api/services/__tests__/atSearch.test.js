const atSearchService = require('../atSearch')

const expectedOunassJSON = {
    "black": "#000000",
    "blue": "#000064",
    "brown": "#cfae9b",
    "burgundy": "#5c0101",
    "metallic": "/s/i/silver_1.jpg",
    "multicolour": "/m/u/multi_color_gradient.paint.net.001.png",
    "grey": "#949494",
    "green": "#006400",
    "neutral": "#c7c0b3",
    "orange": "#ff8c00",
    "pink": "#ff38af",
    "purple": "#9a2eff",
    "red": "#d40f0f",
    "white": "#ffffff",
    "yellow": "#ffdd00",
    "silver": "#c0c0c0",
    "gold": "#c9b873",
    "rose gold": "#daa892",
    "default": null,
    "blue ": "#2c5068"
}

const expectedMandPJSON = {
    "white": "#ffffff",
    "black": "#000000",
    "red": "#ff0009",
    "blue": "#223ad6",
    "green": "#08cf37",
    "yellow": "#e1f011",
    "pink": "#f703d2",
    "orange": "#ffa600",
    "grey": "#5e545e",
    "brown": "#a16e3b",
    "clear": "#ffffff",
    "purple": "#990e99",
    "gold": "#ffd900",
    "silver": "#919596",
    "beige": "#dbd8a0",
    "cream": "#ede6cc",
    "sand": "#e8d8a0",
    "mustard": "#ffdb58",
    "burgundy": "#800020",
    "navy": "#223ad6",
    "multi": "/r/a/radiant-rainbow-10-color-multiassort-swatch.jpg",
    "black jack": "#030003",
    "chestnut": "#954535",
    "dark navy": "#000080",
    "deep teal": "#003333",
    "desert": "#e8d8a0",
    "desert khaki": "#dddd92",
    "lime": "#32cd32",
    "ochre": "#cc7722",
    "raspberry": "#872657",
    "sage": "#9c9f84",
    "sand dune": "#e8d8a0",
    "teal": "#008080",
    "golden yellow": null,
    "light blue": "#afa5d4",
    "default": null,
    "gris": "#524e52"
}

describe('Search Service', () => {

        it('should retreive the facet filters for Ounass', async () => {
            let response = await atSearchService.getOunassSearchFacets()
            expect(response).toEqual(expectedOunassJSON)
        })

        it('should retreive the facet filters for M and P', async () => {
            let response = await atSearchService.getMandPSearchFacets()
            expect(response).toEqual(expectedMandPJSON)
        })

        it('should retreive the search results for Ounass', async () => {
              let response = await atSearchService.executeOunassSearch('Shoe', 'Red')
              let searchJSON = response
              expect(searchJSON.pagination.totalHits).toEqual(854)    
        })

        it('should retreive the search results for M and P', async () => {
            let response = await atSearchService.executeMandPSearch('Bear', 'Red')
            let searchJSON = await response.json()
            // console.log(response)
            expect(searchJSON.pagination.totalHits).toEqual(34)   
        })

        it('should retreive the search results for M and P with a default colour facet filter', async () => {
            let response = await atSearchService.executeMandPSearch('Bear', 'default')
            let searchJSON = response
            expect(searchJSON.pagination.totalHits).toEqual(12)   
        })
    }
)