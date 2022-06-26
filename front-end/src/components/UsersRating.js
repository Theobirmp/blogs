import React from 'react'
import StarRating from './StarRating';
import {userRating} from '../data/userRatings';
import { quotes } from '../data/userRatings';
import user1 from "../images/users/user1.jpg"
import user2 from "../images/users/user2.jpg"
import user3 from "../images/users/user3.jpg"
import '../css/usersRating.css'
const UsersRating = () => {
    const users=[user1,user2,user3]
    return (
        <div className='users-container'>
        {userRating.map((user,index)=>(
            <div className='user-rating-container' key={index}>
                <div className='img-quote'>
                    <img src={users[index]} alt="" />
                    <span className='quote'>{quotes[index]}</span>
                </div>
                <StarRating value={user} className='star-rating'/>
            </div>
            ))}
        
        </div>
    )
}

export default UsersRating
