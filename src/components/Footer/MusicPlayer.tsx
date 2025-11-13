
import React from 'react';
import './MusicPlayer.scss';
import { FaFastBackward, FaFastForward, FaHeart, FaPlay } from 'react-icons/fa';
import { IoRepeatOutline, IoResize } from "react-icons/io5";
import { TfiMenuAlt } from 'react-icons/tfi';
import { IoIosVolumeHigh } from 'react-icons/io';

type MusicPlayerProps={
music:string;
}

const MusicPlayer :React.FC<MusicPlayerProps>= ({music}) => {
  return (
    <div className='musicPlayer'>
        <div className='musicPlayer-info'>
            <div className='musicPlayer-info-left'>
            <>
            <img src="/artist-1.jpg" alt="" />
            </>
            <div className='musicPlayer-info-left-name'> 
            <h5>music name</h5>
            <p>singer name</p>
            </div>
          </div>
            <div className='musicPlayer-info-right'>
            <span><FaHeart/></span>
            </div>

        </div>


         <div className='musicPlayer-control'>

            <div className='musicPlayer-control-icons'>
            <span><IoRepeatOutline/></span>
            <span><FaFastBackward /></span>
            <span><FaPlay /></span>
            <span><FaFastForward/></span>
            <span><IoRepeatOutline/></span>
            
            </div>
            <div className='musicPlayer-control-progress'>
            <input type="range" name="" id="" />
            </div>
         </div>



          <div className='musicPlayer-extra'>

            <span><TfiMenuAlt /></span>
            <span><IoResize /></span>
            <span><IoIosVolumeHigh /></span>
            <input type='range'/>
          </div>
    </div>
  );
}
export default MusicPlayer;