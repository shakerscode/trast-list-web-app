import { useEffect, useState } from "react"


const useReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('fakereviewdata.json')
        .then(res =>res.json())
        .then(data => setReviews(data))
    }, [])
    return [reviews, setReviews]
}

export  { useReviews};
 