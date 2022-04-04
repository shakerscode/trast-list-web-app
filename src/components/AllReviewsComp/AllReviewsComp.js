import React from 'react';

const AllReviewsComp = ({allReview}) => {
    const {img, name, rating, review} = allReview;
    return (
        <div className='user-review'>
            <img src={img} alt="" width={'150px'} />
            <h3>{name}</h3>
            <p>Rating: {rating}</p>
            <p><b>Review:</b> {review.slice(0, 154)}... <i>read more</i> </p>
        </div>
    );
};

export default AllReviewsComp;