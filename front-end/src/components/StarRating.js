import React from 'react'
import ReactStarsRating from 'react-awesome-stars-rating';
const StarRating = ({value}) => {
    return (
        <ReactStarsRating  value={value} isEdit={false}/>
    )
}

export default StarRating
