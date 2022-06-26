import {FAV_A_BLOG,UN_FAV_A_BLOG, FETCH_BLOGS_BEGIN, FETCH_BLOGS_FAILURE, FETCH_BLOGS_SUCCESS} from "./blogTypes"

const initialState={
    blogs:[],
    loading:false,
    error:''
}

const blogReducer=(state=initialState,action)=>{
    switch (action.type) {
        // case SHOW_NEW_BLOGS:
        //     return state
        // case SHOW_OLD_BLOGS:
        //     return state
        // case SHOW_RATING_BLOGS:
        //     return state.slice().sort(function(a, b) {
        //         if (a.rating < b.rating)
        //         return -1
        //         if (a.rating > b.rating)
        //         return 1
        //         return 0
        //     })
            case FAV_A_BLOG:
                return  {...state,blogs:state.blogs.map(blog=>{
                    if(blog._id===action.payload)return{...blog,isFavourite:true}
                        return {...blog}
                })}
            case UN_FAV_A_BLOG:
            return  {...state,blogs:state.blogs.map(blog=>{
                if(blog._id===action.payload)return{...blog,isFavourite:false}
                    return {...blog}
            })}
            case FETCH_BLOGS_BEGIN:
                return {...state,loading:true}
            case FETCH_BLOGS_SUCCESS:
                return {...state,blogs:action.payload,loading:false}
            case FETCH_BLOGS_FAILURE:
                return {...state,loading:false,error:action.payload,blogs:[]}
        default:
            return state
    }
}
export default blogReducer