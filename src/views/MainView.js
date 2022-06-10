import "./MainView.css" 
import { Link } from "react-router-dom";

const MainView = () => {
    return(
        <>

        {/* HEADER */}

        <div className="header">
            <h1 className="headerTitle">
                ROAD RUNNERS
            </h1>
            <h4 className="headerSub">
                Javier Belloso
            </h4>
        </div>

        {/* MAIN LINKS */}

        <div className="linkContainer">
            <Link className="mainLinks" to="/contact">
                Contact
                </Link>

                <Link className="mainLinks" to="/payment">
                    Pay Now
                </Link>
                
                <Link className="mainLinks" to="/booking">
                    Booking
                </Link>
        </div>
        </>
    )
}

export default MainView;