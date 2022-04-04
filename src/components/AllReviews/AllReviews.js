import React from 'react';
import { useReviews } from '../../Hooks/reviews';
import AllReviewsComp from '../AllReviewsComp/AllReviewsComp';
import './AllReviews.css'

const AllReviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2>All users review</h2>
            <div className='review-page'>
                {
                    reviews.map(review =><AllReviewsComp allReview={review}></AllReviewsComp>)
                }
            </div>
        </div>
    );
};

export default AllReviews;