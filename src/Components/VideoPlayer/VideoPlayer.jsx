import React, { useRef } from 'react'
import './VideoPlayer.css'
import Univid from '../../assets/Univ-vid.mp4'

const VideoPlayer = ({playState ,setPlayState}) => {

    const player =useRef(null)

    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false)
        }
    }

  return (
    <div className={playState ? 'video-player' : 'playState hide'} ref={player} onClick={closePlayer}>
        <video src={Univid} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer