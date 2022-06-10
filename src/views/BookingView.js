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

        {/* TO CHANGE LINKS AND LOGO */}
        {/* TO FINISH CALENDLY */}

        <div className='CalendlyContainer'>
            <img className='Calendly'
            src="https://cdn1.venmo.com/marketing/images/branding/downloads/venmo_logo_blue.png" 
            alt="venmo"
            />
            <a 
             className='CalendlyLink'
             href="https://account.venmo.com/pay?recipients=Christian-Belloso">
                Book a Ride
            </a>
        </div>

        </>
    )
}

export default BookingView;