import './PayView.css'

const PayView = () => {
    return (
        <>

        {/* HEADER */}

        <div className="paymentHeader">
            <h1 className="headerTitle">
                PAYMENT
            </h1>
        </div>

        {/* VENMO */}

        <div className='venmoContainer'>
            <img className='venmo'
            src="https://cdn1.venmo.com/marketing/images/branding/downloads/venmo_logo_blue.png" 
            alt="venmo"
            />
            <a 
             className='venmoLink'
             href="https://www.venmo.com/u/Christian-Belloso">
                Send Money
            </a>
        </div>
        </>
    )
}

export default PayView;

