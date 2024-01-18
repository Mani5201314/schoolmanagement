
import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
 
const Piechart = () => {
    // Sample data
    const data = [
        {students: 80,fill: "lawngreen" },
        {students: 20, fill: "white" },
    
    ];
    
    const handleViewClick = () => {
      console.log("students Attendance 80%");
  };
 
    return (
        <div
            style={{
                textAlign: "center",
                margin: "auto 10%",
            }}
        >
            
           
            <PieChart className="bg-dark rounded"  width={150} height={200}>
                <Tooltip />
                <text x={75} y={30} textAnchor="middle" fill="white" dominantBaseline="middle">
            Attendance
            </text>
                <Pie
                    data={data}
                    dataKey="students"
                    outerRadius={50}
                    innerRadius={45}
                 
                    
                 
                />
                 <text x={75} y={100} textAnchor="middle" fill="white" dominantBaseline="middle">
              80%
            </text>
            <foreignObject  className="rounded" x={25} y={160} width={100} height={30}>
                    <button
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "white",
                            border: "none",
                            cursor: "pointer",
                            fontSize:15

                        }}
                        onClick={handleViewClick}
                    >
                        View &#62;
                    </button>
                </foreignObject>
            </PieChart>
        </div>
    );
};
 
export default Piechart;