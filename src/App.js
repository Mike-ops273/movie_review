import React from "react";
import { useState, useEffect } from "react";
import movieService from "./services/movieService";
import ListMovie from "./components/ListMovie";
import ReviewButton from "./components/ReviewButton";
import ReviewModal from "./components/ReviewModal";

const App = () => { 
  const [debugMessage, setDebugMessage] = useState("Testing testing 1234"); //debugging
  const [movies, setMovies] = useState([]); //store movies from db
  const [modalState, setModalState] = useState(false) //modal state
  const [comments, setComments] = useState(0); //store comments from db
  const [totalReviews, setTotalReviews] = useState(0);

  //fetch movies and store them 
  useEffect(() => {
    movieService
    .getAllMovies()
    .then(response => {
      setMovies(response.data)
    })
  }, [])

  //fetch comments and store them
  useEffect(() => {
    movieService
    .getAllReviews()
    .then(response => {
      setComments(response.data)
    })
  }, [])

  console.log("movies:", typeof(movies)) //this can be mapped
  console.log("comments:", typeof(comments)) //but this can not be mapped??

  {/*
  const numberOfComments = comments.map(comment => {
    return (
      Math.max(comment.id)
    )
  })
*/}


{/*
  const listOfMovies = movies.map((movie) => //key is specified inside the array maybe delete this funtion
    <>
    <ListMovie key={movie.id} movie={movie}  />
    <ReviewButton key={movie.title} movie={movie}  />
    </>
  )
*/ }
        
  return (
    <div>
      <div>debug: {debugMessage}</div> 
      <h1>Movie Review App</h1>
      <p>Total number of Reviews: {totalReviews}</p>

      <ul>
      {movies.map(movie => ( //key prop warning wont go away
        <>
          <li key={movie.id}>
            <ListMovie key={movie.id.toString()} movie={movie} />
            <ReviewButton key={movie.title} movie={movie} 
            modalState={modalState} setModalState={setModalState} /*switch for modal state*/ 
            comments={comments} setComments={setComments} 
            setTotalReviews={setTotalReviews} totalReviews={totalReviews} />
            <p>average score:</p>
          </li>
        </>
      ))}
      </ul>


      {/*
      <ReviewModal modalState={modalState} setModalState={setModalState} listOfMovies={listOfMovies} />
      {console.log(modalState)/*check if modal is on or off
      */}
      

      {/*listOfMovies*/}
    </div>
  );
};

export default App;
