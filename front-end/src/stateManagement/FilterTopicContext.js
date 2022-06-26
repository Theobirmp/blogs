import React, { createContext,useState } from 'react'
import filters from '../data/filters'
import topics from '../data/topics'

export const FilterTopicContext=createContext()
export function FilterTopicProvider({children}) {
    const [blogsPerPage]=useState(6)
    // const [firstBlog]=useState(0)
    // const [lastBlog]=useState(6)
    const [currPage,setCurrPage]=useState(1)
    const [currFilter,setCurrFilter]=useState(filters.newest)
    const [currTopic,setCurrTopic]=useState(topics.all)    
    
    const values={currPage,setCurrPage,blogsPerPage,currFilter,setCurrFilter,currTopic,setCurrTopic}
    return (
        <FilterTopicContext.Provider value={values}>
            {children}
        </FilterTopicContext.Provider>
    )
}

// export default FilterTopicContext.Provider
