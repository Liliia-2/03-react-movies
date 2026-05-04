import type { Movie } from "../../../types/movie";
import css from "./MovieGrid.module.css";

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
    return (
        <ul className={css.grid}>
            {movies.map((movie) => (
                <li> key = { movie.id })
                    <div> className={css.card} onClick={() => onSelect(movie)}
                     <img
                        className={css.image}
                        src="https://image.tmdb.org/t/p/w500/poster-path"
                        alt="movie title"
                        loading="lazy"
                    />
                    <h2 className={css.title}>Movie title</h2>
                     </div>
                 </li>
    ))
}
        </ul>
    );
}