import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './AllReviewsComp.css'

const AllReviewsComp = ({ allReview }) => {
    const { img, name, rating, review } = allReview;
    return (
        <div className='user-review'>
            <img src={img} alt="" width={'150px'} />
            <h3>{name}</h3>
            <p>Rating: {rating}</p>
            <p><FontAwesomeIcon className='color-name' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='color-name' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='color-name' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className='color-name' icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon className={`${parseInt(rating) === 5 ? "color-name" : ""}`} icon={faStar}></FontAwesomeIcon></p>
            <p><b>Review:</b> {review.slice(0, 154)}... <i>read more</i> </p>
        </div>
    );
};

export default AllReviewsComp;