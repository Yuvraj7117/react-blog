import React, { useState } from 'react';
import "./hollywood.css";
import Api from './C2api1.js';
import Api2 from './C2api2.js';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';



const Card2 = () => {

    // taking date and time
    const dt= new Date();
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const m=dt.getMonth();
    const d=dt.getDate();
    const y=dt.getFullYear();
    const date=months[m].toLocaleString() + " " + d + " " + y;


    const [show,setShow]=useState();

    return (
        <>
           <div className='origin-div'>
               {/* heading section */}
               <div className='heading_sec'>
                    <h1><span>The</span>Siren</h1>
                    <div className={show ?'menu-mobile':'menu'}>
                        <ul>
                        <Link to="/"><li style={{color:"black",textDecoration:"none"}}>Home</li></Link>
                        <Link to="/Card2" style={{textDecoration:"none",color:"black"}}><li>Bollywood</li></Link>
                        <Link to="/Technology" style={{textDecoration:"none",color:"black"}}><li>Technology</li></Link>
                        <Link to="/Hollywood" style={{textDecoration:"none",color:"black"}}><li>Hollywood</li></Link>
                        <Link to="/Fitness" style={{textDecoration:"none",color:"black"}}><li>Fitness</li></Link>
                        <Link to="/Food" style={{textDecoration:"none",color:"black"}}><li>Food</li></Link>
                        </ul>
                    </div>
               </div>

               {/* Hamburger */}
                <div className='hamburger-icon'>
                    <a onClick={()=>setShow(!show)} href="#">
                        <GiHamburgerMenu/>
                    </a>
                </div>

               {/* second section */}
                {/* Bollywood */}
               <div className='second-sec'>
                   <div className='bollywood-sec'>
                       <h1>Hollywood</h1>
                       <Api/>
                       <Api/>
                       <Api/>
                       <Api/>
                       <Api/>
                       <Api/>
                       <Api/>
                       <p>Load More<span >&#8594;</span></p>
                   </div>
                   {/* Top-Posts */}
                   <div className='top-posts-sec'>
                       <h1><span>Top</span> Posts</h1>
                       <img src="./IMAGES/image5.jpg" alt="mountain"/>
                       <br/><br/>
                       <h3>Catch waves with an adventure guide</h3>
                    <br/>
                    <p><b>Travel/</b> {date}</p>
                    <Api2/>
                    <Api2/>
                    <Api2/>
                    <h2>Advertistement</h2>

                   </div>

               </div> 
           </div> 

           <footer>
               <i className='fa fa-home'> <Link to="/">&#60;</Link>  2 of 3 <Link to="/Card3">&#62;</Link> </i>
            </footer>
        </>
    )
}

export default Card2;
