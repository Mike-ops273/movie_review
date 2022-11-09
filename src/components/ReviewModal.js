import { useState, useEffect } from "react";
import movieService from "../services/movieService";
import axios from "axios";
import CommentsModal from "./CommentsModal";

const REVIEW_MODAL_STYLE = {
    position: "fixed",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "50px", 
    //zIndex: 1000
}

const OVERLAY = {
    position: "fixed", 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    backgroundColor: "rgba(76, 76, 76, 0.1)"
}

const COMMENT_AREA_STYLE = {
    width: "400px",
    paddingBottom: "80px"
}


    
const ReviewModal = ({ movie, modalState, setModalState, comments, setComments, setTotalReviews, totalReviews }) => {
    const [author, setAuthor] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(""); 
    const [chosenMovie, setChosenMovie] = useState("");
    const [commentsState, setCommentsState] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const userReview = { chosenMovie, author, comment, rating }
        console.log(userReview);
        axios
        .post("http://localhost:3001/reviews", userReview)
        .then(response => console.log("response.data"))
        .catch(error => console.log(error.response.data))
        setCommentsState(true)
        setAuthor("")
        setComment("")
        setRating("")
        setChosenMovie("")
        setTotalReviews(totalReviews + 1)
        }

    if(!modalState) return null
    return (
        <>
        <div style={OVERLAY}></div>
        <div style={REVIEW_MODAL_STYLE}>
            <h1>MODAL</h1>
            <form onSubmit={handleSubmit}>
                <h3>Make a Review for:</h3>
                <select required value={chosenMovie} onChange={(e) => setChosenMovie(e.target.value)} >
                    <option value="" disabled selected>select movie</option>
                    <option value="Titanic">Titanic</option>
                    <option value="The Wizard of Oz">The Wizard of Oz</option>
                    <option value="The Godfather">The Godfather</option>
                    <option value="The Godfather Part II">The Godfather Part II</option>
                    <option value="The Shawshank Redemption">The Shawshank Redemption</option>
                    <option value="Schindler's List">Schindler's List</option>
                    <option value="Casablanca">Casablanca</option>
                    <option value="Forrest Gump">Forrest Gump</option>
                    <option value="The Silence of the Lambs">The Silence of the Lambs</option>
                    <option value="Apocalypse Now">Apocalypse Now</option>
                </select>
                <br />
                <br />
                <label>Author:</label>
                <br />
                <input required type="text" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
                <br />
                <br />
                <label>Comment:</label>
                <br />
                <textarea required type="text" value={comment} 
                onChange={(e) => setComment(e.target.value)} style={COMMENT_AREA_STYLE}>
                </textarea>
                <br />
                <br />
                <label>Rating:</label>
                <br />
                <select required value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="" disabled select>select score</option>
                    <option value="1">1/5</option>
                    <option value="2">2/5</option>
                    <option value="3">3/5</option>
                    <option value="4">4/5</option>
                    <option value="5">5/5</option>
                </select>
                <br />
                <br />
            <button onClick={() => console.log("clicked submit")}>Submit</button>
            <button onClick={() => setModalState(false)}>Close</button>
            </form>
        </div>
        <CommentsModal 
        commentsState={commentsState} 
        setCommentsState={setCommentsState} 
        setModalState={setModalState}
        comments={comments} 
        />
        </>
    )
}

export default ReviewModal