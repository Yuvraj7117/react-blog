import React, { useState } from 'react';
import './Card1.css';
import {Link} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';





<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Noto+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Noto+Sans&family=Roboto+Mono&display=swap');
</style>

const Card1=()=>{

   const dt= new Date();
   const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
   const m=dt.getMonth();
   const d=dt.getDate();
   const y=dt.getFullYear();
   const date=months[m].toLocaleString() + " " + d + " " + y;
   const time=dt.toLocaleTimeString();

   
   const [clicked,setClicked]= useState(false);


return(
    <>
    <div>
    <div className='head'>
        <h1><span>The</span> Siren</h1>
        <div className='hamburger'>
        <a onClick={()=>setClicked(!clicked)}>
        <GiHamburgerMenu/>
        </a>
        </div>

       

    </div>
    <div className={clicked ? "mobile-headings":"headings"} style={{cursor:"pointer"}} >

        <Link to="/" style={{textDecoration:"none",color:"black"}}><h6 >Home</h6></Link>
        <Link to="/Card2" style={{textDecoration:"none",color:"black"}}><h6>Bollywood</h6></Link>
        <Link to="/Technology" style={{textDecoration:"none",color:"black"}}><h6>Technology</h6></Link>
        <Link to="/Hollywood" style={{textDecoration:"none",color:"black"}}><h6>Hollywood</h6></Link>
        <Link to="/Fitness" style={{textDecoration:"none",color:"black"}}><h6>Fitness</h6></Link>
        <Link to="/Food" style={{textDecoration:"none",color:"black"}}><h6>Food</h6></Link>
    </div>
    <div className="set1">
        <div>
           <img src='./IMAGES/image1.jpg' alt="first-pic" className="image1"/>
           <h3 className="hofimage1">Title of Vertical gallery</h3>
           <h3 className="dofimage1">Travel/{date}</h3>
       </div>
            <div className="set1a">
                <div>
                    <img src="./IMAGES/image2.jpg" alt="second-pic" className="image2"/>
                    <h3 className="hofimage2" >The Sound cloud You loved is doomed </h3>
                    <h3 className="dofimage2">Travel/{date}</h3>
                </div>
                <div>
                     <img src="./IMAGES/image2.jpg" alt="second-pic" className="image2"/>
                     <h3 className="hofimage2" id="hofimage2a">The Sound cloud You loved is doomed</h3>
                    <h3 className="dofimage2" id="dofimage2a">Travel/{date}</h3>
                </div>
           
            </div>
       
        </div> 
    </div>

    <div className="set2">
        <div className="head2">
            <h1>The Latest</h1>
        </div>
        <div className="images2">
            <img src="./IMAGES/image3.jpg" alt="temple" className="image3"/>
            <img src="./IMAGES/image3.jpg" alt="temple" className="image3"/>
            <img src="./IMAGES/image3.jpg" alt="temple" className="image3"/>

        </div>
        <div className="paras">
            <div >
            <img src="./IMAGES/image3.jpg" alt="temple" className="image3a"/>    
            <h1 className="ph">Joshua Tree Overnight Adventure</h1>
            <p className="pp">Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has well known as a tourist destination.
               It has a plethora of temples and palaces</p>
            <p className="pd">Travel<span className="pddate">/{date}</span></p>   
            </div>

            <div>
            <img src="./IMAGES/image3.jpg" alt="temple" className="image3b"/>    
            <h1 className="ph">Joshua Tree Overnight Adventure</h1>
            <p className="pp">Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has well known as a tourist destination.
               It has a plethora of temples and palaces</p>
            <p className="pd">Travel<span className="pddate">/{date}</span></p>   
            </div>

            <div>
            <img src="./IMAGES/image3.jpg" alt="temple" className="image3c"/>    
            <h1 className="ph">Joshua Tree Overnight Adventure</h1>
            <p className="pp">Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has well known as a tourist destination.
               It has a plethora of temples and palaces</p>
            <p className="pd">Travel<span className="pddate">/{date}</span></p>   
            </div>
        </div>
    </div>

    <div className="set3">
        <div className="set3part1">
            <div  className="articlesheading">
                <h1>Latest Articles</h1>

            </div>
            <div className="articles">
                <img src="./IMAGES/image4.jpg" alt="sculpture" className="image4"/>
                <div className="articlespara">
                <h2 className="p3h">Catch wave with an adventure guide</h2>
                <p className="p3p"> Gujarat is vastly underrated and it's a mystery
                     to us why the region isn't more well.</p>
                <p className="p3d">Travel/{date}</p>
                </div>
            </div>
            <div className="articles">
                <img src="./IMAGES/image4.jpg" alt="sculpture" className="image4"/>
                <div className="articlespara">
                <h2 className="p3h">Catch wave with an adventure guide</h2>
                <p className="p3p"> Gujarat is vastly underrated and it's a mystery
                     to us why the region isn't more well.</p>
                <p className="p3d">Travel/{date}</p>
                </div>
            </div>
            <div className="articles">
                <img src="./IMAGES/image4.jpg" alt="sculpture" className="image4"/>
                <div className="articlespara">
                <h2 className="p3h">Catch wave with an adventure guide</h2>
                <p className="p3p"> Gujarat is vastly underrated and it's a mystery
                     to us why the region isn't more well.</p>
                <p className="p3d">Travel/{date}</p>
                </div>
            </div>
            <div className="articles">
                <img src="./IMAGES/image4.jpg" alt="sculpture" className="image4"/>
                <div className="articlespara">
                <h2 className="p3h">Catch waves with an adventure guide</h2>
                <p className="p3p"> Gujarat is vastly underrated and it's a mystery
                     to us why the region isn't more well.</p>
                <p className="p3d">Travel/{date}</p>
                </div>
            </div>
        </div>

        <div className="set3part2">
            <h1 className="advertiste">Advertistement</h1>
        </div>
    </div>

    <div className="set4part1">
        <div className="loadmorediv">
           <p className="loadmore"><span  className="arrow"> &#x2193; </span>LOAD MORE </p>
        </div>
        <div>
            <h1 className="topposts">Top Posts</h1>
            <img src="./IMAGES/image5.jpg" alt="mountain" className="image5"/>

        </div>
    </div>

    <div className="set5">
        <div className="set5part1">
            <img src="./IMAGES/image4.jpg" alt="sculpture" className="imageset5a"/>
            <h1 className="set5part1heading">Title of Vertical gallery</h1>
            <p className="set5part1para">Travel /{date}</p>

        </div>
        <div className="set5part2">
            <div className="set5part2a">
                <h1 className="set5part2heading">Catch wave with an adventure guide</h1>
                <p className="set5part2para"> Travel/{date}</p>

            </div>
            <div className="set5part2b">
                <div>
                <img src="./IMAGES/image4.jpg" alt="sculptur"  className="set5part2bimage"/>
                </div>
                <div className="set5part2bhp">
                    <h1 className="set5part2bh">Catch wave with an adventure guide</h1>
                    <p className="set5part2bp">Travel/{date}</p>
                </div>

            </div>
            <div className="set5part2b">
                <div >
                <img src="./IMAGES/image4.jpg" alt="sculptur"  className="set5part2bimage"/>
                </div>
                <div className="set5part2bhp">
                    <h1 className="set5part2bh">Catch wave with an adventure guide</h1>
                    <p className="set5part2bp">Travel/{date}</p>
                </div>

            </div>
            <div className="set5part2b">
                <div>
                <img src="./IMAGES/image4.jpg" alt="sculptur"  className="set5part2bimage"/>
                </div>
                <div className="set5part2bhp">
                    <h1 className="set5part2bh">Catch wave with an adventure guide</h1>
                    <p className="set5part2bp">Travel/{date}</p>
                </div>

            </div>
            
        </div>
        
      
    </div>
    <div className="set6div"> 
        
         <h1>Latest Stories</h1>
        
        <div className="set6">
            <div className="set6a">
                <h1 className="set6h">Catch waves with an adventure guide</h1>
                <p className="set6p1">Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has well known as a tourist destination.
               It has a plethora of temples and palaces.<br></br>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has well known as a tourist destination.
               It has a plethora of temples and palaces</p>
               <p className="set6p2">TECH / TODAY AT {time}</p>

            </div>
            <div className="set6a">
                <h1 className="set6h">Catch waves with an adventure guide</h1>
                <p className="set6p1">Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has well known as a tourist destination.
               It has a plethora of temples and palaces.<br/>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has well known as a tourist destination.
               It has a plethora of temples and palaces</p>
               <p className="set6p2">TECH / TODAY AT {time}</p>

            </div>
            <div className="set6a">
                <h1 className="set6h">Catch waves with an adventure guide</h1>
                <p className="set6p1">Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has well known as a tourist destination.
               It has a plethora of temples and palaces.<br/>Gujarat is vastly underrated and it's a mystery to us why the region isn't more well known as tourist destination. It has well known as a tourist destination.
               It has a plethora of temples and palaces</p>
               <p className="set6p2">TECH / TODAY AT {time}</p>

            </div>
        
        </div>
    </div>

    <div className="footer">
        <p className="foot"> Load More<span className="leftarrow">&#8594;</span></p>
    </div>
 
    <div className="xd">
    <i className='fa fa-home'> <Link to="/Card3">&#60;</Link>  1 of 3 <Link to="/Card2">&#62;</Link> </i>

    </div>


</>
);
};

export default Card1;