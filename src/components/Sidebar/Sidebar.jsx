
import { useState } from 'react'
import { assets } from '../../assets/assets'
const Sidebar = () => {

    const [extended, setExtended] = useState(false)

    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={()=>setExtended(prev=>!prev)} className="menu" src={assets.menu_icon} alt="" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">
                            Recents
                        </p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>What is react ...</p>
                        </div>
                    </div> : null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}

                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>ACTIVITIES</p>:null}

            </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.send_icon} alt="" />
                    {extended?<p> Setting</p>:null}

                </div>
            </div>
        </div>
    )
}

export default Sidebar