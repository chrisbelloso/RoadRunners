import "./MainView.css" 
import { Link } from "react-router-dom";

const MainView = () => {
    return(
        <>

        {/* HEADER */}

        <div className="header">
            <h1 className="mainTitle">
                ROAD RUNNERS
            </h1>
        </div>

        {/* MAIN LINKS */}

        <div className="container">
            <div>
                <p className="mainLinks">
                    Schedule
                </p>
            </div>
            <div>
                <p className="mainLinks">
                    Pay Now
                </p>
            </div>
        </div>

        {/* CONTACT */}

        <div className="contactDiv">
            <Link className="contact" to="/contact">Contact Me</Link>
        </div>
        </>
    )
}

export default MainView;