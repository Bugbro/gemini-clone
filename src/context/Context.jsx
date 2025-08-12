import { createContext, useState } from "react";
import main from "../api/api";

export const Context = createContext();

const ContextProvider = (props) =>{

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt]= useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult]= useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] =useState("");

    const delayPara = (index, next)=>{
        setTimeout(()=>{
            setResultData( prev => prev+next);
        },60*index)
    };

    const newChat = ()=>{
        setLoading(false);
        setShowResult(false);
    }

    const onSent = async(prompt)=>{
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response;
        if(prompt !== undefined){
            response = await main(prompt);
            setRecentPrompt(input);
            setPrevPrompt(prev => [...prev, input]);
        }
        else
        {
            setRecentPrompt(input);
            response = await main(input);
        }
        
         
        let responseReplace = response.replace(/\*\*(.*?)\*\*/g, '<strong class= "bold-text">$1</strong>') // Replace **bold** with <strong>
                                      .replace(/###\s(.*?)\n/g, '<h3>$1</h3>') // Replace ### Heading with <h3>
                                      .replace(/\n/g, '<br />');
        let typeResponseArray = responseReplace.split(" ");
        for(let i=0; i<typeResponseArray.length; i++){
            const next = typeResponseArray[i];
            delayPara(i,next+" ");
        } 
        setLoading(false);
        setInput("");
    }

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        setRecentPrompt,
        recentPrompt,
        showResult,
        resultData,
        onSent,
        loading,
        input,
        setInput,
        newChat
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;