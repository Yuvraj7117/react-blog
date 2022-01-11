import "./C3api1.css"
const Api1=()=>{
    const dt= new Date();
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const m=dt.getMonth();
    const d=dt.getDate();
    const y=dt.getFullYear();
    const date=months[m].toLocaleString() + " " + d + " " + y;
     return(
         <>
         <div className="main">
         <img src="./IMAGES/image3.jpg" alt="temple" className="temple"/>
         <h1>Joshua Tree Overnight Adventure</h1>
         <div className="apidiv">
         <img src="./IMAGES/icon.png" alt="user" className="icon"/>
            <div className="iconpara">
             <h3>Dmitry Nozhenko</h3>
             <p> {date}.4 min read </p>
             </div>
         </div>
         </div>

        </>
     );
};

export default Api1;