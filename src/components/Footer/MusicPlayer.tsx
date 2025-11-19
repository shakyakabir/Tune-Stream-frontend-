
// import React, { useContext, useEffect, useRef, useState } from "react";
// import { MusicContext } from "../../context/MusicContext";
// import './MusicPlayer.scss';
// import { FaFastBackward, FaFastForward, FaHeart, FaPlay } from 'react-icons/fa';
// import { IoRepeatOutline, IoResize } from "react-icons/io5";
// import { TfiMenuAlt } from 'react-icons/tfi';
// import { IoIosVolumeHigh } from 'react-icons/io';

// const MusicPlayer = () => {
//   const { currentSong } = useContext(MusicContext);
//   const audioRef = useRef<HTMLAudioElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);

//   useEffect(() => {
//     if (currentSong && audioRef.current) {
//       audioRef.current.src = currentSong.url;
//       const playPromise = audioRef.current.play();
//       if (playPromise !== undefined) {
//         playPromise
//           .then(() => setIsPlaying(true))
//           .catch((err) => console.log("Audio play failed:", err));
//       }

//       // Update duration when metadata is loaded
//       audioRef.current.onloadedmetadata = () => {
//         setDuration(audioRef.current!.duration);
//       };

//       // Update currentTime as audio plays
//       audioRef.current.ontimeupdate = () => {
//         setCurrentTime(audioRef.current!.currentTime);
//       };

      
//     }
    
//   }, [currentSong]);

//   const togglePlay = () => {
//     if (!audioRef.current) return;
//     if (isPlaying) {
//       audioRef.current.pause();
//       setIsPlaying(false);
//     } else {
//       audioRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   // Helper to format time in mm:ss
//   const formatTime = (time: number) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
//   };

//   const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (!audioRef.current) return;
//     audioRef.current.currentTime = Number(e.target.value);
//     setCurrentTime(Number(e.target.value));
//   };

//   return (
//     <div className='musicPlayer'>
//       <audio ref={audioRef}></audio>

//       <div className='musicPlayer-info'>
//         <div className='musicPlayer-info-left'>
//           <img src={currentSong?.image || "/artist-1.jpg"} />
//           <div className='musicPlayer-info-left-name'> 
//             <h5>{currentSong?.title || "No song selected"}</h5>
//             <p>{currentSong?.artist || ""}</p>
//           </div>
//         </div>

//         <div className='musicPlayer-info-right'>
//           <span><FaHeart/></span>
//         </div>
//       </div>

//       <div className='musicPlayer-control'>
//         <div className='musicPlayer-control-icons'>
//           <FaFastBackward />
//           <button onClick={togglePlay}>{isPlaying ? <FaPause/> :  <FaPlay />}</button>
//           <FaFastForward />
//         </div>

//         <div className="musicPlayer-progress">
//           <span>{formatTime(currentTime)}</span>
//           <input 
//             type="range" 
//             min={0} 
//             max={duration} 
//             value={currentTime} 
//             onChange={handleSeek} 
//           />
//           <span>{formatTime(duration)}</span>
//         </div>
//       </div>

//       <div className='musicPlayer-extra'>
//         <TfiMenuAlt />
//         <IoResize />
//         <IoIosVolumeHigh />
//         <input type='range'/>
//       </div>
//     </div>
//   );
// };

// export default MusicPlayer;












// import React, { useContext, useEffect, useRef, useState } from "react";
// import { MusicContext } from "../../context/MusicContext";
// import './MusicPlayer.scss';
// import { FaFastBackward, FaFastForward, FaHeart, FaPause, FaPlay } from 'react-icons/fa';
// import { IoResize } from "react-icons/io5";
// import { TfiMenuAlt } from 'react-icons/tfi';
// import { IoIosVolumeHigh } from 'react-icons/io';

// const MusicPlayer = () => {
//   const { currentSong } = useContext(MusicContext);
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(1); // <-- New State

//   useEffect(() => {
//     if (currentSong && audioRef.current) {
//       audioRef.current.src = currentSong.url;

//       const playPromise = audioRef.current.play();
//       if (playPromise !== undefined) {
//         playPromise
//           .then(() => setIsPlaying(true))
//           .catch((err) => console.log("Audio play failed:", err));
//       }

//       // Set volume for new song
//       audioRef.current.volume = volume;

//       // Update duration
//       audioRef.current.onloadedmetadata = () => {
//         setDuration(audioRef.current!.duration);
//       };

//       // Update current time
//       audioRef.current.ontimeupdate = () => {
//         setCurrentTime(audioRef.current!.currentTime);
//       };
//     }
//   }, [currentSong,volume]);

//   const togglePlay = () => {
//     if (!audioRef.current) return;

//     if (isPlaying) {
//       audioRef.current.pause();
//       setIsPlaying(false);
//     } else {
//       audioRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   // Format time mm:ss
//   const formatTime = (time: number) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
//   };

//   const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (!audioRef.current) return;
//     const value = Number(e.target.value);
//     audioRef.current.currentTime = value;
//     setCurrentTime(value);
//   };

//   // NEW — Volume Controller
//   const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newVolume = Number(e.target.value);
//     setVolume(newVolume);

//     if (audioRef.current) {
//       audioRef.current.volume = newVolume;
//     }
//   };

//   return (
//     <div className='musicPlayer'>
//       <audio ref={audioRef}></audio>

//       <div className='musicPlayer-info'>
//         <div className='musicPlayer-info-left'>
//           <img src={currentSong?.image || "/artist-1.jpg"} />
//           <div className='musicPlayer-info-left-name'>
//             <h5>{currentSong?.title || "No song selected"}</h5>
//             <p>{currentSong?.artist || ""}</p>
//           </div>
//         </div>

//         <div className='musicPlayer-info-right'>
//           <span><FaHeart /></span>
//         </div>
//       </div>

//       <div className='musicPlayer-control'>
//         <div className='musicPlayer-control-icons'>
//           <FaFastBackward />
//           <button onClick={togglePlay}>
//             {isPlaying ? <FaPause /> : <FaPlay />}
//           </button>
//           <FaFastForward />
//         </div>

//         <div className='musicPlayer-progress'>
//           <span>{formatTime(currentTime)}</span>

//           <input
//             type="range"
//             min={0}
//             max={duration}
//             value={currentTime}
//             onChange={handleSeek}
//           />

//           <span>{formatTime(duration)}</span>
//         </div>
//       </div>

//       <div className='musicPlayer-extra'>
//         <TfiMenuAlt />
//         <IoResize />
//         <IoIosVolumeHigh />

//         {/* VOLUME SLIDER */}
//         <input
//           type='range'
//           min="0"
//           max="1"
//           step="0.01"
//           value={volume}
//           onChange={handleVolumeChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default MusicPlayer;





import React, { useContext, useEffect, useRef, useState } from "react";
import { MusicContext } from "../../context/MusicContext";
import './MusicPlayer.scss';
import { FaFastBackward, FaFastForward, FaHeart, FaPause, FaPlay } from 'react-icons/fa';
import { IoResize } from "react-icons/io5";
import { TfiMenuAlt } from 'react-icons/tfi';
import { IoIosVolumeHigh } from 'react-icons/io';

const MusicPlayer = () => {
  const { currentSong } = useContext(MusicContext);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // <-- New State

  useEffect(() => {
    if (currentSong && audioRef.current) {
      audioRef.current.src = currentSong.url;

      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Audio play failed:", err));
      }

      // Set volume for new song
      audioRef.current.volume = volume;

      // Update duration
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current!.duration);
      };

      // Update current time
      audioRef.current.ontimeupdate = () => {
        setCurrentTime(audioRef.current!.currentTime);
      };
    }
  }, [currentSong,volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Format time mm:ss
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const value = Number(e.target.value);
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  // NEW — Volume Controller
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className='musicPlayer'>
      <audio ref={audioRef}></audio>

      <div className='musicPlayer-info'>
        <div className='musicPlayer-info-left'>
          <img src={currentSong?.image || "/artist-1.jpg"} />
          <div className='musicPlayer-info-left-name'>
            <h5>{currentSong?.title || "No song selected"}</h5>
            <p>{currentSong?.artist || ""}</p>
          </div>
        </div>

        <div className='musicPlayer-info-right'>
          <span><FaHeart /></span>
        </div>
      </div>

      <div className='musicPlayer-control'>
        <div className='musicPlayer-control-icons'>
          <FaFastBackward />
          <button onClick={togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <FaFastForward />
        </div>

        <div className='musicPlayer-progress'>
          <span>{formatTime(currentTime)}</span>

          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
          />

          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className='musicPlayer-extra'>
        <TfiMenuAlt />
        <IoResize />
        <IoIosVolumeHigh />

        {/* VOLUME SLIDER */}
        <input
          type='range'
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
