import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar1 = () => {
    return (
        <div id="fixed">
        <div className="na" >
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <div><Link id="space" to="/home">Home</Link></div>
                    <div><Link id="space" to="/last">Assignment</Link></div>
                    <div><Link id="space" to="/homework">Homework</Link></div>
                    <div><Link id="space" to="/payfee">Pay Fee</Link></div>
                </div>
            </nav>

        </div>
        </div>
    );
}

export default Navbar1;