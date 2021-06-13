import './Home.css'
import Nav from '../nav/Nav';
import Header from '../header/Header';
import Row from '../row/Row';
import Detail from '../detail/Detail';
import { useState } from 'react';
import Movie from '../../interfaces/Movie';

function Home() {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    const selectMovie = (movie: Movie) => {
        setSelectedMovie(() => movie);
    }

    const closeDetail = () => {
        setSelectedMovie(() => null);
    }

    return (
        <>
            <div className="app">
                <Nav />
                <Header />
                <Row title='Netflix Originals' category='netflix-originals' onMovieSelected={selectMovie}/>
                <Row title='Trending Now' category='trending-now' onMovieSelected={selectMovie}/>
                <Row title='Top Rated' category='top-rated' onMovieSelected={selectMovie}/>
                <Row title='Action Movies' category='action-movies' onMovieSelected={selectMovie}/>
                <Row title='Horror Movies' category='horror-movies' onMovieSelected={selectMovie}/>
                <Row title='Romance Movies' category='romance-movies' onMovieSelected={selectMovie}/>
                <Row title='Documentaries Movies' category='documentaries-movies' onMovieSelected={selectMovie}/>
            </div>
            {selectedMovie && <Detail movie={selectedMovie} onClosedDetail={closeDetail}/>}
        </>
    );
}

export default Home;