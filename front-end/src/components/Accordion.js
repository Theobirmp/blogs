import React from 'react'
import "../css/accordion.css"
import data from "../data/accordionData"
import { v4 as uuidv4 } from 'uuid';    
import { useState } from 'react'
import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineMinus} from "react-icons/ai"
const Accordion = () => {
    const [questionData,setQuestionData]=useState(data.map(ques=>({...ques,active:false})))

    function handleClick(q){
        console.log(q)
        let tempQuestionData=[...questionData]
        tempQuestionData=tempQuestionData.map(ques=>{
            if(ques.question===q) return {...ques,active:!ques.active}
            return {...ques,active:false} 
        })
        // let tempQuestion=tempQuestionData.findIndex(el=>el.question==q)
        // console.log(tempQuestion)
        // tempQuestionData[tempQuestion].active=!tempQuestionData[tempQuestion].active
        setQuestionData(tempQuestionData)        
        }
    return (
        <section className='accordion'>
                {questionData.map(q=>(  
                    <div className='question' key={uuidv4()} onClick={()=>handleClick(q.question)}>
                        <h1 className={q.active?'light-gray':''}>
                            <span >{q.question}</span>
                            <span className='plus-minus-icon'>{!q.active?<AiOutlinePlus/>:<AiOutlineMinus />}</span>
                            </h1>
                        <p id={q.question} className={q.active?"display-block":"display-none"}>{q.answer}</p>
                    </div>
                ))}
            </section>
    )
}

export default Accordion
