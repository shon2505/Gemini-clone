
import { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const {onSent, recentPrompt,showResult,loading,resultData,setinput,input} = useContext(Context);
   

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello,Shantanu</span></p>
          <p>How can I help u today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem beatae quo voluptates ipsa eaque, recusandae illo dolor iure nulla tempora.</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem beatae quo voluptates ipsa eaque, recusandae illo dolor iure nulla tempora.</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem beatae quo voluptates ipsa eaque, recusandae illo dolor iure nulla tempora.</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem beatae quo voluptates ipsa eaque, recusandae illo dolor iure nulla tempora.</p>
            <img src={assets.code_icon} alt="" />
          </div>


        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setinput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className='bottom-info'>
              Gemini may display incorrect information!
          </p>
        </div>
      </div>

    </div>
  )
}

export default Main