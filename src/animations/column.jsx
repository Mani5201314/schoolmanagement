
import React from "react";
import {
	BarChart,
	Bar,
	XAxis
} from "recharts";

const ColumnChart = () => {

	const data = [
        { name: "Mon", students: 80 },
		{ name: "Tue", students: 30 },
		{ name: "Wed", students: 60 },
		{ name: "Thu", students: 10 },
		{ name: "Fri", students: 30 },
		{ name: "Sat", students: 100 },


	];

	return (
        <div  style={{
            textAlign: "center",
            margin: "auto 10%",
        }} className="bg-light rounded">
           <div style={{display:"flex",justifyContent:"space-around"}}>
            <div> <h3>Home work</h3></div>
            <div>Weekly</div>
           </div>
        <div className="d-flex justify-content-center" >
          
               
           
        <BarChart width={300} height={300} data={data}>
       

        <Bar  w dataKey="students" fill="#27cad0" barSize={20} style={{borderRadius:30}}/>
        <XAxis dataKey="name" />
        
    </BarChart>
 
    </div>
    </div>
	);
};

export default ColumnChart;
