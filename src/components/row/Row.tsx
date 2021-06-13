import { firebaseDatabase } from "../../firebase/firebase";
import { useEffect, useState } from "react";
import Movie from "../../interfaces/Movie";
import MovieParams from "../../interfaces/Row/MovieParams";
import './Row.css'

function Row(props: MovieParams) {
    const [movies, setMovies] = useState([]);
    const {title, category, onMovieSelected} = props;

    const onMovieClicked = (movie: any) => {
        onMovieSelected(movie);
    }

    const fetchMovies = ((category: string) => {
        const movieRef = firebaseDatabase.ref(`movies/${category}`);
        movieRef.on('value', (snapshot) => {
            const movies = snapshot.val();            
            if (movies) {
                setMovies(() => movies);
            }
        });
    });

    useEffect(() => {
        fetchMovies(category);
    }, [category]);

    return (
        <div className="row">
            <h2 className="title">{title}</h2>
            <div className="row-content">
                {movies.map((movie: Movie) => (
                    <img 
                    className="catalog-movies"
                    onClick={() => onMovieClicked(movie)}
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    alt={movie.original_title} />
                ))}
            </div>
        </div>
    );
}

export default Row;