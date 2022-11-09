import { useState, useEffect } from "react";
import movieService from "../services/movieService";
import axios from "axios";

const COMMENT_OVERLAY = {
        position: "fixed", 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        backgroundColor: "red"
}

const COMMENTS_MODAL = {
    position: "fixed",
    top: "15%",
    left: "50%",
    width: "70%",
    height: "50%",
    transform: "translate(-50%, -18%)",
    backgroundColor: "white",
    padding: "50px",
    overflow: "scroll", 
    zIndex: 2000
}
    
const CommentsModal = ({ commentsState, setCommentsState, setModalState, comments, setComments }) => {
    if(!commentsState) return null

    const handleClose = () => {
        setCommentsState(false)
        setModalState(false)
    }

    const allComments = comments.map((comment) => {
        return (
            <>
            <p>{comment.author}: {comment.chosenMovie}, {comment.rating}</p>
            </>
        )
    })

    return (        
        <>
            <div style={COMMENT_OVERLAY}></div>
            <div style={COMMENTS_MODAL}>
                <h1>User Submitted Reviews</h1>
                <p>{allComments}</p>
                <button onClick={handleClose}>close</button>
            </div>
        </>   
    )
}

export default CommentsModal