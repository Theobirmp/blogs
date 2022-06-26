import { SHOW_NEW_BLOGS,SHOW_OLD_BLOGS,SHOW_RATING_BLOGS} from "./blogTypes"
export const showNewBlogs=()=>{
    return {
        type:SHOW_NEW_BLOGS
    }
}
export const showOldBlogs=()=>{
    return {
        type:SHOW_OLD_BLOGS
    }
}
export const showRatingBlogs=()=>{
    return {
        type:SHOW_RATING_BLOGS
    }
}