import React, { useState } from "react";
import "../styles/last.css"

import { Link } from "react-router-dom";
import Navbar1 from "./navbottom";

function Last() {
   const [sDate, setsDate] = useState(new Date());

   const findMonthDays = (y, m) => {
      return new Date(y, m + 1, 0).getDate();
   };

   const findFirstDay = (y, m) => {
      return new Date(y, m, 1).getDay();
   };

   const changeToPrevMonth = () => {
      setsDate((pDate) => {
         const pMonth = pDate.getMonth() - 1;
         const pYear = pDate.getFullYear();
         return new Date(pYear, pMonth);
      });
   };

   const changeToNextMonth = () => {
      setsDate((pDate) => {
         const nMonth = pDate.getMonth() + 1;
         const nYear = pDate.getFullYear();
         return new Date(nYear, nMonth);
      });
   };

   const handleDateClick = (date) => {
      setsDate(date);
   };

   const showCalendar = () => {
      const currDate = new Date();
      const y = sDate.getFullYear();
      const m = sDate.getMonth();
      const mDays = findMonthDays(y, m);
      const fDay = findFirstDay(y, m);

      const allDays = [];

      // For empty cells
      for (let p = 0; p < fDay; p++) {
         allDays.push(<div key = {`em-${p}`} className = "box empty"></div>);
      }

      // Show actual days
      for (let d = 1; d <= mDays; d++) {
         const date = new Date(y, m, d);
         const isSelected = sDate && date.toDateString() === sDate.toDateString();

         allDays.push(
            <div
               key = {`d-${d}`}
               className = {`box ${isSelected ? "selected" : ""}`}
               onClick = {() => handleDateClick(date)}
               >
               {d}
            </div>
         );
      }

      return allDays;
   };

   return (
      <div>
         <div className="mt-5 mb-5">
            <a href="" className="float-start" style={{textDecoration:"none"}}><h1><Link id="space" to="/home">&larr;</Link></h1></a>
            <h1>Assignment</h1>
         </div>
         
      <center>
      <div className = "main">
         <div className = "header">
            <button id="calbutton" onClick = {changeToPrevMonth}> &#60; </button>
            <h2 style={{color:"grey"}}>
               {sDate.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
               })}
            </h2>
            <button  id="calbutton" onClick = {changeToNextMonth}> &#62;</button>
         </div>
         <div className = "body">{showCalendar()} </div>
            {sDate && (
               <div id="selected" className = "selected-date">
                  Selected Date: {sDate.toLocaleDateString()}
               </div>
            )}
         </div>
         </center>
         
<center>
   <div className="mt-5 mb-5">
      <h1 className="text-start float-start ">Assignment(10)</h1>
      <p className="text-end">See all</p>
   </div>

<div className="p-3 mb-2 bg-light text-dark" style={{}} >
   <div><img src="/img/book1.png" className="float-start" style={{width:"70px"}} alt="" /></div> 
   <h5 style={{display:"inline-flex"}} >Theoretical Physics</h5>
   <p>Theoretical physics is the branch of physics that deals with developing and evolving theory</p>
   <a href="" style={{textDecoration:"none"}}><h6  style={{color:"Chartreuse"}}>&#128209; Downlode Pdf</h6></a>
   
</div>
<div className="p-3 mb-2 bg-light text-dark" style={{}} >
   <div><img src="/img/calculation2.png" className="float-start" style={{width:"70px"}} alt="" /></div> 
   <h5 style={{display:"inline-flex"}} >Mathemetics HomeTask</h5>
   <p>Play card or board games that involve counting or looking for patterns. Use dice or playing cards to make a game out of practicing math facts.</p>
   <a href="" style={{textDecoration:"none"}}><h6  style={{color:"Chocolate"}}>&#128209; Downlode Pdf</h6></a>
   
</div>
<div className="p-3 mb-2 bg-light text-dark" style={{}} >
   <div><img src="/img/school6.png" className="float-start" style={{width:"70px"}} alt="" /></div> 
   <h5 style={{display:"inline-flex"}} >Physical Exrcise</h5>
   <p>movements and activities done to keep your body healthy or make it stronger.</p>
   <a href="" style={{textDecoration:"none"}}><h6 style={{color:"brown"}}>&#128209; Downlode Pdf</h6></a>
   
</div>
<div className="p-3 mb-2 bg-light text-dark" style={{}} >
   <div><img src="/img/eng4.png" className="float-start" style={{width:"70px"}} alt="" /></div> 
   <h5 style={{display:"inline-flex"}} >MERN STACK</h5>
   <p>MERN Stack is a compilation of four different technologies that work together to develop dynamic web apps and websites</p>
   <a href="" style={{textDecoration:"none"}}><h6 style={{color:"Violet"}}>&#128209; Downlode Pdf</h6></a>
   
</div>
<div className="p-3 mb-2 bg-light text-dark" style={{}} >
   <div><img src="/img/geography5.png" className="float-start" style={{width:"70px"}} alt="" /></div> 
   <h5 style={{display:"inline-flex"}} >Social</h5>
   <p>Multiple Social Maps : Zoom in for more details. Social Map. Social Map is a free, global,</p>
   <a href="" style={{textDecoration:"none"}}><h6 style={{color:"orange"}}>&#128209; Downlode Pdf</h6></a>
   
</div>

</center>
<Navbar1 />

      </div>
   );
}

export default Last;