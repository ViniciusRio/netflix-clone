import firebaseDatabase from "../../firebase/firebase";
import { useEffect, useState } from "react";
import Movie from "../../interfaces/Movie";
import MovieParams from "../../interfaces/Row/MovieParams";

function Row(props: MovieParams) {
    const [movies, setMovies] = useState([]);
    const {title, category} = props

    const fetchMovies = ((movieType: string) => {
        const movieRef = firebaseDatabase.ref(`movies/${movieType}`);
        movieRef.on('value', (snapshot) => {
            const movies = snapshot.val();            
            if (movies) {
                setMovies(() => movies);
            }
        });
    });

    useEffect(() => {
        fetchMovies(category);
    }, []);

    return (
        <div className="row">
            <h2 className="title">{title}</h2>
            <div className="row-content">
                {movies.map((movie: Movie) => (
                    <img 
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                    alt={movie.original_name} />
                ))}
            </div>
        </div>
    );
}

export default Row;