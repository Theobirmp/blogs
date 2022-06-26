import React, { useContext } from 'react'
import "../css/pagination.css"
import { FilterTopicContext } from '../stateManagement/FilterTopicContext'
const Pagination = ({currBlogs}) => {
    const {blogsPerPage,setCurrPage}=useContext(FilterTopicContext)
    const pages=[]
    for(let i=1;i<=Math.ceil(currBlogs.length/blogsPerPage);i++){
      pages.push(i)
    }
    function handleClick(page){
        setCurrPage(page)
    }
    return (
        <ul className='pagination'>
            {pages.map(page=>(
                <li className='pagination-item' key={page}><button onClick={()=>handleClick(page)}>{page}</button></li>
            ))}
        </ul>
    )
}

export default Pagination
