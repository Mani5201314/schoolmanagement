import ColumnChart from "../animations/column";
import Navbar1 from "./navbottom";
import "../styles/home.css"
const Homework = () => {
    return ( 
        <div>
            <h1>HomeWork</h1>
            <ColumnChart />
            <br /><br />
            <div id="navhome"> <Navbar1 /></div>
        </div>
     );
}
 
export default Homework;