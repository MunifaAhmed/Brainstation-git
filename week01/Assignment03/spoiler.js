const readlineSync = require('readline-sync')
const cheerio = require('cheerio')
const request = require('request')

let movieName = process.argv[2]
let timeOut = Math.abs(process.argv[3])
let moviePlot = []

if(process.argv[2]&&process.argv[3]){
    movieName = process.argv[2]
    timeOut = process.argv[3]
    console.log(`**spoiler warning** We will be spoiling the plot of  ${movieName} in ${timeOut} seconds.`)
 }else{
    movieName = readlineSync.question('What would like to watch for today? ')
    timeOut = readlineSync.question('How long does it takes? ')
    console.log(`**spoiler warning** We will be spoiling the plot of ${movieName} in ${timeOut} seconds.`)
 }

request(`https://www.google.ca/search?q=film${movieName}`, function(err, response, body){
    if(err) {
        console.log(err)
        return
      }

    if(response.statusCode === 404) {
        console.log('Error - Path Not Found: ' + geoDataUrl)
        return
      }

    const $ = cheerio.load(body)
    var header = []
    $('.r').each(function(i, elem){
    header.push($(elem).text())
    })

        request(`https://api.themoviedb.org/3/search/movie?api_key=a4710dde77169b6895df1a4e3402a070&query=${movieName}`, function(err, response, body){
            if(err) {
                console.log(err)
                return
              }
            
            if(response.statusCode === 404) {
                console.log('Error - Path Not Found: ' + geoDataUrl)
                return
            }
            const data = JSON.parse(body)
            moviePlot = data.results["0"].overview

            console.log(moviePlot)  
        })

console.log('The latest google search results for the film star wars are: ', header)
})
