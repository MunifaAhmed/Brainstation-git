// const cheerio = require('cheerio')
const express = require('express')
const app = express()

app.use(express.static('./public'));//the server is chosing to serve the html file unless I comment out this section, I am not able to view index.ejs. how to to such thing?
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    let movie = getMovies()
    res.render('index', {movie})//what is this movie: stand for {(movie: getmMovie())}
})
function getMovies() {
    return [
    {
        id: '1',
        title: 'Munifa Ahmed',
        year: '1982',
        rated: 'R',
        released: '25 June 1982',
        runtime: '1h 57min',  
        genre: 'Sci-Fi, Thriller',
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, David Peoples',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        language: 'English',
        country: 'USA, Hong Kong'
    },
    {
        id: '2',
        title: 'Mohammed Ali',
        year: '1982',
        rated: 'R',
        released: '25 June 1982',
        runtime: '1h 57min',  
        genre: 'Sci-Fi, Thriller',
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, David Peoples',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        language: 'English',
        country: 'USA, Hong Kong'
    },
    {
        id: '3',
        title: 'aziza',
        year: '1982',
        rated: 'R',
        released: '25 June 1982',
        runtime: '1h 57min',  
        genre: 'Sci-Fi, Thriller',
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, David Peoples',
        actors: 'Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos',
        plot: 'A blade runner must pursue and try to terminate four replicants who stole a ship in space and have returned to Earth to find their creator.',
        language: 'English',
        country: 'USA, Hong Kong'
    }
    ]
}
app.get('/movie/:movieId',(req, res) => {
    const {movieId} = req.params
    let movie = [];
    const movies = getMovies()
    
    for(let i = 0; i<movies.length; i++){
        if(movieId === movies[i].id){
            movie = movies[i]
            break
        }
    }
    
    res.render('movie-details', {movie:movie})//what is the difference between the two?
})

app.get('/search', (req, res) => {
    const {movieSearch} = req.query
    const movies = getMovies()
    const filteredMovies = movies.filter((movie)=> {
        if(movie.title.toLowerCase().includes(movieSearch.toLowerCase())){
            return true
        }
     })
     res. render('index', {movie: filteredMovies})
    }

)
app.listen(8080,() =>
 console.log('Server Started on http://localhost:8080')
 
 )