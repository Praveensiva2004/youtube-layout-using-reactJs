import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FaYoutube } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import video1 from './assests/video1.mp4';
import video2 from './assests/video2.mp4';
import video3 from './assests/video3.mp4';
import video4 from './assests/video4.mp4';
import video5 from './assests/video5.mp4';
import video6 from './assests/video6.mp4';

const App =()=>{
  return(
        <div class="layout">
          <div class="icons">
         

          <div class="icon"><MdHome  className='image'/> <p>home</p></div>
          <div class="icon"><SiYoutubeshorts className='image'/><p>shorts</p></div>
          <div class="icon"> <MdSubscriptions className='image'/><p>subscribe</p></div>
          <div class="icon"><MdHistory className='image'/><p>history</p></div>
          <div class="icon"><MdOutlinePlaylistPlay className='image'/><p>playlist</p></div>
          <div class="icon"><AiFillLike className='image'/><p>likes</p></div>

          

          </div>
          <div class="youtube">
          <div class="header">  <FaYoutube className='tubelogo'/>
          <h2>youtube</h2>
          <input type="text" placeholder='search here'></input></div>
          <hr></hr>
          <div class='videos'>
           <div class="video"> <video src={video1} autoPlay loop muted className='video'></video>
           <h5>youtube channel</h5>
         
           </div>
           <div class="video"> <video src={video2} autoPlay loop muted className='video'></video>
           <h5>youtube channel</h5>
          
           </div>
           <div class="video"> <video src={video3} autoPlay loop muted className='video'></video>
           <h5>youtube channel</h5>
           
           </div>
          </div>
          <div class='videos'>
           <div class="video"> <video src={video4} autoPlay loop muted className='video'></video>
           <h5>youtube channel</h5>
         
           </div>
           <div class="video"> <video src={video5} autoPlay loop muted className='video'></video>
           <h5>youtube channel</h5>
          
           </div>
           <div class="video"> <video src={video6} autoPlay loop muted className='video'></video>
           <h5>youtube channel</h5>
         
           </div>
          </div>
          </div>
        </div>
  );
};
ReactDOM.render(<App />,document.getElementById("root"));