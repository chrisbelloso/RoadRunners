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

        {/* UPCOMING FEATURE */}

        <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <h2 style={{display: "flex",justifyContent: "center", fontFamily: "monospace", fontSize: "25px"}}>
                Upcomming Payment Feature!
            </h2>
            <p style={{display: "flex", justifyContent: "center", fontSize: "30px"}}>
            👷‍♂️⚒️
            </p>
        </div>
        </>
        )
    }

export default PayView;

    // <>


    // {/* VENMO */}

    // <div className='venmoContainer'>
    //     <img className='venmo'
    //     src="https://cdn1.venmo.com/marketing/images/branding/downloads/venmo_logo_blue.png" 
    //     alt="venmo"
    //     />
    //     <a 
    //      className='venmoLink'
    //      href="https://account.venmo.com/pay?recipients=Christian-Belloso">
    //         Send Money
    //     </a>
    // </div>
    // </>