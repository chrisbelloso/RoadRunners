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

        <div className="container">
            <div>
            <Link className="mainLinks" to="/booking">Book Ride</Link>
            </div>
            <div>
                <Link className="mainLinks" to="/payment">
                    Pay Now
                </Link>
            </div>
        </div>
        </>
    )
}

export default MainView;