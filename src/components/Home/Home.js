import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useReviews } from '../../Hooks/reviews';
import Reviews from '../Reviews/Reviews';
import './Home.css'



const Home = () => {
    const [reviews, setReviews] = useReviews();
   const navigate = useNavigate()
    return (
        <div>
            <div className='home-container'>
                <div className='home-container-left'>
                    <h1>The Night Jar</h1>
                    <p>This is the review of <b>The Night Jar</b> restaurant which is located in Near, Kouchpukur, P.O Hathgachia, P.S. :K.L.C, Rajarhat Township, Kolkata, West Bengal 700156, India.  </p>
                    <button>Visit Them</button>
                </div>
                <div className='home-container-left'>
                    <div className='image-section'>
                        <div>
                            <img src='https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/x/i/p51199-16289455986117bcbedd9fd.jpg?tr=tr:n-large' alt="" width={'400px'} />
                        </div>
                        <div className='second-img-container'>
                            <div>
                                <img src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/b/j/p51199-16289457026117bd26a762f.jpg?tr=tr:n-large" alt="" width={'200px'} />
                            </div>
                            <div>
                                <img src="https://d3gw4aml0lneeh.cloudfront.net/assets/locations/15035/ZQf3bNXHKEd9.jpg" alt="" width={'200px'} height={'130px'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='review-section'>
                <h1>Customers Review</h1>
                <div className='review'>
                    {
                        reviews.slice(0, 3).map(review=> <Reviews key={review.id} userReview={review}></Reviews>)
                    }
                </div>
                <button onClick={()=>{navigate('/reviews')}} className='review-btn'>See All</button>
            </div>
        </div>
    );
};

export default Home;