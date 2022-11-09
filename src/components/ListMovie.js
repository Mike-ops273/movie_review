const ListMovie = ({ movie, key, movies }) => { //now key is no longer a prop?
    return (
        <>
        <h3 key={movie.id}>{movie.id}. {movie.title}, by {movie.director}, {movie.release}</h3>
        </>
    )
}

export default ListMovie;