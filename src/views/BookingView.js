import "./BookingView.css" 

const BookingView = () => {
    return(
        <>

         {/* HEADER */}

        <div className="bookingHeader">
            <h1 className="headerTitle">
                BOOKING
            </h1>
        </div>

        {/* SUB-HEADER */}

        <div className="subContainer">
            <ul>
                <li id="english">
                All booking are scheduled contacting me
                </li>
            </ul>
            <ul>
                <li id="spanish">
                Todos los servicios deben ser agendados<br />contactandome
                </li>
            </ul>
        </div>

        {/* WHATSAPP */}

        <div className="whaContainer">
            <a className="whaText" href="https://wa.me/17866037623">💬 Chat on Whatsapp</a>
            <a className='telText' href="tel: 7866037623"> 📞 Call Now</a>
        </div>
        </>
    )
}

export default BookingView;

