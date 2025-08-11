import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import main from '../../api/api'

const Main = () => {
    
  return (
    <>
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img  src={assets.user_icon} alt="User" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Dev</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest me best programing language to learn in 2025.</p>
                        <img src={assets.compass_icon} alt="Compass Icon" />
                    </div>
                    <div className="card">
                        <p>Give me tips to make money online.</p>
                        <img src={assets.bulb_icon} alt=" Icon" />
                    </div>
                    <div className="card">
                        <p>Best indoor activities to do with your team to increase bond.</p>
                        <img src={assets.message_icon} alt=" Icon" />
                    </div>
                    <div className="card">
                        <p>What is Front-end and why use ReactJs.</p>
                        <img src={assets.code_icon} alt=" Icon" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
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
