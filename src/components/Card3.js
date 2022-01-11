import React from 'react';
import './Card3.css';
import Api1 from './C3api1.js';
import Api2 from './C3api2.js';
import {Link} from 'react-router-dom';

const Card3 = () => {

    const dt= new Date();
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const m=dt.getMonth();
    const d=dt.getDate();
    const y=dt.getFullYear();
    const date=months[m].toLocaleString() + " " + d + " " + y;



    return (
        <>
            <div className='heading-div'>                 
                     <h1><span>The</span>Siren</h1>
                     <h3>Get Started</h3>
            </div>
           <div className='paras-div'>
                
                <div className='blog-div'>
                    <h1>5 Ways to animate a React app.</h1>
                        
                    <div className='profile-div'>
                        <img src='./IMAGES/icon.png' alt='profile-pic'/>
                        <div className='profile-para'>
                            <h3>Dimtry Nozhenko</h3>
                            <p>{date}.10 min read</p>
                        </div>                               
                        <div className='icons'>
                            <i className="fa fa-facebook-square"></i>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-instagram"></i>
                            <i className="fa fa-youtube-play"></i>
                        </div>
                    </div>
                </div>
                    
                <div className='para-div'>
                    <img src='./IMAGES/image6.jpg' alt='react-js'/>
                    <p>Animation in ReactJs app is a popular topic and there are many ways to create different types of animations. Many developers create different types of animations.
                    Many developers create animation exclusively using css and addding classes to HTML tags.
                    This is a great way and you should use it. If you want to create complex animations you can pay atention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.  
                    </p>
                    <h4>Let's talk about them</h4>
                    <img src="./IMAGES/code.jpg" alt="codes" className="code"/>
                </div>

                
    
               
                    <div className="clapsdiv">
                        <h4>React</h4>
                        <h4>javascript</h4>
                        <h4>Animation</h4>
                    </div>

                    <div className="codeclaps">
                        <i>&#128079;</i>
                        <p>9.3k claps</p>
                    </div>
            

                    <div className="maleicondiv">
                        <img src="./IMAGES/icon.png" alt="user"></img>
                        <div className='name'>
                            <h3>Dimtry Nozhenko </h3>
                            <p>{date}.10 min read</p>
                        </div>
                    </div>  
            </div> 

            <div className='api1-div'>
                <Api1/>
                <Api1/>
                <Api1/>
            </div>

            <div className='api2-div'>
                <h1>More From The Siren</h1>
                <Api2/>
                <Api2/>
                <Api2/>
                <Api2/>
            </div>

            <footer>
               <i className='fa fa-home'> <Link to="/Card2">&#60;</Link>  3 of 3 <Link to="/">&#62;</Link> </i>
            </footer>

            <div className='sticky'>

                <div className='clapss'>
                
                <p><span>&#128079;</span>9.3k claps</p>
                </div>
                <div className='share'>
                
                <p class="fa fa-share-alt"><span>Share this article</span></p>
                </div>
                
            </div>
        
        </>
    )
}

export default Card3
