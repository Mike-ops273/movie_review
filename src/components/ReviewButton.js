import { useState } from "react";
import ReviewModal from "./ReviewModal";

const ReviewButton = ({ movie, key, modalState, setModalState, comments, setComments, setTotalReviews, totalReviews }) => { //toggle review modal
    //const [averageScore, setAverageScore] = useState("???");

    return (
        <>
        <button key={movie.title} onClick={() => setModalState(true)}>Review</button>
        <button onClick={() => console.log(movie.title)}>test title</button>
        {/*<p>average score: {averageScore}</p>*/}
        <ReviewModal key={movie.id} movie={movie} 
        modalState={modalState} setModalState={setModalState}
        comments={comments} setComments={setComments} 
        setTotalReviews={setTotalReviews} totalReviews={totalReviews} />
        </>
    )
}

export default ReviewButton;