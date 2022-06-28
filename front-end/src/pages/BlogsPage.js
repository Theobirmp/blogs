import React, { useContext, useState } from 'react'
import Blogs from "../components/Blogs"
import {useEffect} from "react"
import Pagination from '../components/Pagination'
import { BlogContext } from '../stateManagement/BlogContext'
import {FilterTopicContext} from "../stateManagement/FilterTopicContext"
import Filter from "../components/Filter"
import {useDispatch, useSelector} from "react-redux"
import { fetchBlogs } from '../redux/blogs/blogActions'
import filters from '../data/filters';
import topics from '../data/topics';

const BlogsPage = () => {
    const {currFilter,setCurrFilter}=useContext(FilterTopicContext)
    const {currTopic,setCurrTopic}=useContext(FilterTopicContext)
    const {blogsPerPage,firstBlog,lastBlog}=useContext(FilterTopicContext)
    const {currPage,setCurrPage}=useContext(FilterTopicContext)
    const {favouriteBlogs,setFavouriteBlogs}=useContext(BlogContext)
    const blogs=useSelector(state=>state.blogs.blogs)
    const [currBlogs,setCurrBlogs]=useState(blogs)
    const [displayBlogs,setDisplayBlogs]=useState([])
    const dispatch = useDispatch()
    console.log(`all blogs ${blogs}`)
    useEffect(()=>{
      console.log('fetching data')
      dispatch(fetchBlogs())
},[])
    useEffect(()=>{
        let tempCurrBlogs
        let tempBlogs=[...blogs]
        if(currFilter===filters.newest) {
                tempCurrBlogs=tempBlogs.slice().reverse()
            }
            else if(currFilter===filters.oldest){
                tempCurrBlogs=tempBlogs.slice()
            }
            else if(currFilter===filters.rating){
                tempCurrBlogs=tempBlogs.sort(ratingSort)
            }else{
                console.log(`filter has the value: ${currFilter}`)
            }
            if(currTopic===topics.all){
                setCurrBlogs(currBlogs=>tempCurrBlogs)
            }else{
                tempCurrBlogs=tempCurrBlogs.filter(blog=>blog.topic===currTopic)
                setCurrBlogs(currBlogs=>tempCurrBlogs)
            }
            setCurrPage(1)
            console.log('curr blogs')
            console.log(tempCurrBlogs)
    },[currFilter,currTopic,blogs])
      //slices curr blogs to get the n we want in each page
useEffect(()=>{
    
    var lastBlog=currPage*blogsPerPage 
    var firstBlog=lastBlog-blogsPerPage //arrays start from zero -- slice is [) -- we must not +1
    var tempDisplayBlogs=currBlogs.slice(firstBlog,lastBlog)
    console.log('fav blogs')
    console.log(favouriteBlogs)
    
    // console.log(favouriteBlogs)
    // console.log(tempDisplayBlogs)
    console.log('display blogs')
    console.log(tempDisplayBlogs)
    setDisplayBlogs(displayBlogs=>tempDisplayBlogs)
},[currPage,currBlogs,blogs])
    
    function ratingSort( a, b ) {
  if ( a.rating < b.rating ){
    return 1;
  }
  if ( a.rating > b.rating ){
    return -1;
  }
  return 0;
}
    return (
        <>
        <Filter/>
        <Blogs displayBlogs={displayBlogs}/>
        <Pagination currBlogs={currBlogs}/>
        </>
    )
}

export default BlogsPage
