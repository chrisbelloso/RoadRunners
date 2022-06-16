import './BookingView.css';

const BookingView = () => {
    return(
        <>
        
        {/* HEADER */}

        <div className="header">
            <h1 className="headerTitle">
                BOOKING
            </h1>
        </div>

        {/* SUB-HEADER */}

        <div className="subContainer">
            <ul>
                <li id="english">
                Book a ride through Calendly.
                </li>
            </ul>
            <ul>
                <li id="spanish">
                Agenda un service a traves de Calendly.
                </li>
            </ul>
        </div>

        {/* CALENDLY */}

        <div className='CalendlyContainer'>
            <img className='Calendly'
            src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_9b95c3b92b1ef692b5f69baaec6579d5/calendly.png" 
            alt="calendly"
            />
            <a 
             className='CalendlyLink'
             href="https://calendly.com/javierbroadrunners">
                Book a Ride
            </a>
        </div>

        <div className='custom'>
            <h3>
                *Custumize your trip by contacting me!*
            </h3>
        </div>

        </>
    )
}

export default BookingView;