
import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
 
const Piechart2 = () => {
    // Sample data
    const data = [
        {students: 60,fill: "yellow" },
        {students: 40, fill: "white" },
    
    ];
    
    const handleViewClick = () => {
      console.log("students Fee 60%");
  };
 
    return (
        <div
            style={{
                textAlign: "center",
                margin: "auto 10%",
            }}
        >
            
           
            <PieChart className="bg-light rounded"  width={150} height={200}>
                <Tooltip />
                <text x={75} y={30} textAnchor="middle" fill="dark" dominantBaseline="middle">
            Fee
            </text>
                <Pie
                    data={data}
                    dataKey="students"
                    outerRadius={50}
                    innerRadius={45}                 
                 
                />
                 <text x={75} y={100} textAnchor="middle" fill="dark" dominantBaseline="middle">
              60%
            </text>
            <foreignObject  className="rounded" x={25} y={160} width={100} height={30}>
                    <button
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "black",
                            border: "none",
                            cursor: "pointer",
                            color:"white",
                            fontSize:10
                        }}
                        onClick={handleViewClick}
                    >
                        Payfee 
                    </button>
                </foreignObject>
            </PieChart>
        </div>
    );
};
 
export default Piechart2;