import "./ContactView.css" 

const ContactView = () => {
    return(
        <>

         {/* HEADER */}

        <div className="header">
            <h1 className="headerTitle">
                CONTACT
            </h1>
        </div>

        {/* SUB-HEADER */}

        <div className="subContainer">
            <ul>
                <li id="english">
                You can contact me through whatsapp or call
                </li>
            </ul>
            <ul>
                <li id="spanish">
                Puedes contactarme por Whatsapp o<br /> por llamada
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

export default ContactView;

