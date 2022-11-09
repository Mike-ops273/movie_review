import axios from "axios";

const movieUrl = "http://localhost:3001/movies"; 
const reviewUrl = "http://localhost:3002/reviews";

const getAllMovies = () => {
    return (
        axios
        .get(movieUrl)
    )
}

const getAllReviews = () => {
    return (
        axios.get("http://localhost:3001/reviews")
    )
}

const postReview = (userReview) => {
    return ( 
        axios
        .post(reviewUrl, userReview)
    )
}

export default { getAllMovies, postReview, getAllReviews };