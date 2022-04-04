import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Reviews.css'

const Reviews = ({ userReview }) => {
    const { name, img, review, rating } = userReview;
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

export default Reviews;