const express = require('express')
const app = express()

app.use(express.static('./public'));
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    let movie = getMovies()
    res.render('index', {movie})
})


function getMovies() {
    return [
    {
        id: '1',
        title: 'Harry Potter',
        released: 'November 16, 2001',
        runtime: '60 min',  
        director: 'Chris Columbus',
        writer: 'J. K. Rowling and Robert Galbraith',
        actors: 'Daniel Radcliffe, Rupert Grint, Emma Watson, Tom Felton',
        plot: `Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.`,
        overview: "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends",
        image:"harry.jpeg",
        trailor: "https://www.youtube.com/embed/PbdM1db3JbY"
    },
    {
        id: '2',
        title: 'Hulk',
        released: 'June 17, 2003',
        runtime: '1h 57min',  
        director: 'Ridley Scott',
        writer: 'Hampton Fancher, Jack Kirby, Kenneth Johnson',
        actors: 'Bill Bixby, Lou Ferrigno, Jack Colvin, Charles Napier',
        plot: `The Incredible Hulk is an American television series based on the Marvel Comics character, the Hulk. The series aired on the CBS television network and starred Bill Bixby as David Banner, Lou Ferrigno as the Hulk, and Jack Colvin as Jack McGee.

        In the TV series, Dr. David Banner, a widowed physician and scientist, who is presumed dead, travels across America under assumed names, and finds himself in positions where he helps others in need despite his terrible secret: in times of extreme anger, he transforms into a huge, incredibly strong green creature, who has been given the name "The Hulk”. In his travels, Banner earns money by working temporary jobs while searching for a way to control his condition.The series was originally broadcast by CBS from 1978 to 1982, with 82 episodes over five seasons. The two-hour pilot movie, which established the Hulk's origins, aired on November 4, 1977. It was developed and produced by Kenneth Johnson, who also wrote or directed some episodes.After the series ended, the fate of David Banner was a cliffhanger until 1988. The franchise was purchased from CBS by rival NBC. They produced three made-for-television films: The Incredible Hulk Returns, The Trial of the Incredible Hulk and The Death of the Incredible Hulk. Since its debut, The Incredible Hulk series has garnered a worldwide fan base.`,
        overview:"The Hulk is a fictional superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk",
        image:"hulk.jpg",
        trailor: "https://www.youtube.com/embed/H0RQOT14lck"
      
    },
    {
        id: '3',
        title: 'Matirx',
        released: 'February 11 2010',
        runtime: '2h 16min',  
        director: 'Lilly Wachowski ',
        writer: 'Lana Wachowski',
        actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving',
        plot: ` Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his lif`,
        overview:"Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
        image:"matrix.jpeg",
        trailor: "https://www.youtube.com/embed/m8e-FF8MsqU"
        
    },
    {
        id: '4',
        title: 'Green Lantern',
        released: 'June 17, 2011',
        runtime: '1h 54min',  
        director: 'Martin Campbell',
        writer: 'Michael Goldenberg, Greg Berlanti, Michael Green',
        actors: 'Ryan Reynolds, Blake Lively, Peter Sarsgaard,Tim Robbins',
        plot:`For centuries, a small but powerful force of warriors called the Green Lantern Corps has sworn to keep intergalactic order. Each Green Lantern wears a ring that grants him superpowers. But when a new enemy called Parallax threatens to destroy the balance of power in the Universe, their fate and the fate of Earth lie in the hands of the first human ever recruited.`,
        overview:`Sworn to preserve intergalactic order, the Green Lantern Corps has existed for centuries. Its newest recruit, Hal Jordan (Ryan Reynolds), is the first human to join the ranks.`,
        image:"latern.jpg",
        trailor: "https://www.youtube.com/embed/W7w07MLhhb4"
    },
        
    {
        id: '5',
        title: 'The Musk',
        released: '25 June 1982',
        runtime: '1h 41min',  
        director: 'Chuck Russell',
        writer: 'Mike Werb',
        actors: 'Jim Carrey, Cameron Diaz, Nancy Fish, Tim Bagley',
        plot: `When timid bank clerk Stanley Ipkiss (Jim Carrey) discovers a magical mask containing the spirit of the Norse god Loki, his entire life changes. While wearing the mask, Ipkiss becomes a supernatural playboy exuding charm and confidence which allows him to catch the eye of local nightclub singer Tina Carlyle (Cameron Diaz). Unfortunately, under the mask's influence, Ipkiss also robs a bank, which angers junior crime lord Dorian Tyrell (Peter Greene), whose goons get blamed for the heist.`,
        overview:`When timid bank clerk Stanley Ipkiss discovers a magical mask containing the spirit of the Norse god Loki, his entire life changes. While wearing the mask, Ipkiss becomes a supernatural playboy exuding charm and confidence which allows him to catch the eye of local nightclub singer Tina Carlyle`,
        image:"mask.jpg",
        trailor: "https://www.youtube.com/embed/lcjN7zkgELM"
    
    },
    {
        id: '6',
        title: 'Journey Island',
        released: 'January 09, 2012',
        runtime: '1h 34min',  
        director: 'Brad Peyton',
        writer: 'Richard Outten',
        actors: 'Josh Hutcherson, Dwayne Johnson, Michael Caine, Vanessa Hudgens',
        plot: `Now 17, Sean Anderson (Josh Hutcherson) receives a coded distress signal from an island where none should exist. Knowing that he will not be able to dissuade Sean from tracking the signal to its source, Hank (Dwayne Johnson), Sean's new stepfather, joins the teen on a quest to the South Pacific. Together with helicopter pilot Gabato (Luis Guzmán) and Gabato's feisty daughter, Kailani (Vanessa Hudgens), they set out to find the island and rescue its sole human inhabitant (Michael Caine).`,
        overview:`Sean Anderson partners with his mom's boyfriend on a mission to find his grandfather, who is thought to be missing on a mythical island.`,
        image:"journey.jpg",
        trailor: "https://www.youtube.com/embed/iBSYxd38eic"

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
    
    res.render('movie-details', {movie:movie})
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