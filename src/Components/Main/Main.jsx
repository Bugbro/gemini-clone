import React, { useContext, useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import main from '../../api/api'
import { Context } from '../../context/Context'
import { useEffect } from 'react'

const Main = () => {
    
    const{onSent, recentPrompt, showResult, loading, resultData, setInput, input, setPrevPrompt} = useContext(Context);
    const [user, setUser] = useState(false);

    useEffect(()=> userName(),[]);
    const handleKeyDown = (e)=>{
        if(e.key === 'Enter')
        {
          onSent(input) ; 
        }
    }
    const userName =()=>{
        let name = prompt("Enter Your Name : ");
        if(name)
        {
            setUser(name);
        }
    }
    const cardCick = (e)=>{
        const pSelect = e.currentTarget.querySelector('p');
        if(pSelect)
        {
            const cardText = pSelect.textContent;
            setInput(cardText);
            setPrevPrompt(prev => [...prev, cardText]);
            onSent(cardText);
        }
    }

  return (
    <>
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img onClick={userName}  src={assets.user_icon} alt="User" />
            </div>
            <div className="main-container">

                {!showResult ?
                <>
                <div className="greet">
                    <p><span>Hello,{ user ? user : "User" }</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card" onClick={cardCick} >
                        <p>Suggest me best programing language to learn in 2025.</p>
                        <img src={assets.compass_icon} alt="Compass Icon" />
                    </div>
                    <div className="card" onClick={cardCick} >
                        <p>Give me tips to make money online.</p>
                        <img src={assets.bulb_icon} alt=" Icon" />
                    </div>
                    <div className="card" onClick={cardCick} >
                        <p>Best indoor activities to do with your team to increase bond.</p>
                        <img src={assets.message_icon} alt=" Icon" />
                    </div>
                    <div className="card" onClick={cardCick} >
                        <p>What is Front-end and why use ReactJs.</p>
                        <img src={assets.code_icon} alt=" Icon" />
                    </div> 
                </div>
                </>
                : <div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt="User" />
                        <p>{recentPrompt} </p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="Gemini" />
                        {loading? <div className="loader"><hr/><hr/><hr/></div>: <p dangerouslySetInnerHTML={{__html: resultData}}></p>}
                        
                    </div>
                </div>
                }
                
                
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=> setInput(e.target.value)} onKeyDown={handleKeyDown} value={input} type="text" placeholder='Enter prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={()=> onSent(input)} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double check its result. Your privacy and Gemini Apps.
                    </p>
                </div>
            </div>    
        </div>
    </>
  )
}

export default Main
