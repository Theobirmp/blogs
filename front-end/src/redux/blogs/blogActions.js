import axios from "axios"
import {FETCH_BLOGS_BEGIN, FETCH_BLOGS_FAILURE, FETCH_BLOGS_SUCCESS,FAV_A_BLOG,UN_FAV_A_BLOG} from "./blogTypes"


export const fetchBlogsBegin=()=>{
    return {
        type:FETCH_BLOGS_BEGIN
    }
}
export const fetchBlogsSuccess=(blogs)=>{
    return {
        type:FETCH_BLOGS_SUCCESS,
        payload:blogs
    }
}
export const fetchBlogsFailure=(error)=>{
    return {
        type:FETCH_BLOGS_FAILURE,
        payload:error
    }
}
export const favBlog=(id)=>{
    return{
        type:FAV_A_BLOG,
        payload:id
    }
}
export const unFavBlog=(id)=>{
    return{
        type:UN_FAV_A_BLOG,
        payload:id
    }
}


export const fetchBlogs=()=>{
    return (dispatch)=>{
        dispatch(fetchBlogsBegin())
        axios.get(`http://localhost:4000/blogs`).then((res)=>{
            const blogs=res.data
            dispatch(fetchBlogsSuccess(blogs))
        }).catch(error=>{
            const message=error.message
            dispatch(fetchBlogsFailure(message))
        })
    }
}