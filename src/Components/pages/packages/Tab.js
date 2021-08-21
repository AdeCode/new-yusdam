import React, { useState } from 'react'

export default function Tab(tabTitle) {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
        console.log(toggleState);
    }

    return (
        <div className="tab-container">
            <div className="bloc-tabs">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} 
                onClick={()=>toggleTab(1)}
                >Basic Package</div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} 
                onClick={()=>toggleTab(2)}
                >Standard Package</div>               
            </div>
            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"} 
                onClick={()=>toggleTab(1)}>
                    <div className="content-details">
                        <p>Our basic package is our cheapest hajj package and the cheapest one 
                        you will find anywhere. </p>
                        <p>The basic package includes the following services</p>
                    </div>
                    
                    <br />
                    <p>
                        <ul>
                            <li>Visa Processing</li>
                            <li>Hotel Accommodation</li>
                            <li>Intra-Saudi logistics</li>
                            <li>Feeding</li>
                            <li>Hajj Rites books and souvenir</li>
                            <li>Airport Protocol both in Nigeria and Saudi Arabia</li>
                        </ul>
                    </p>
                    <div className="packageDetails-section-btn">
                        <a href="#">Book Now</a>
                    </div>
                </div>

                <div className={toggleState === 2 ? "content active-content" : "content"} 
                onClick={()=>toggleTab(1)}>
                    <div className="content-details">
                        <p>Our standard package is our cheapest hajj package and the cheapest one 
                        you will find anywhere. </p>
                        <p>The basic package includes the following services</p>
                    </div>
                    <br />
                    <p>
                        <ul>
                            <li>Visa Processing</li>
                            <li>Hotel Accommodation</li>
                            <li>MEALS WILL BE SERVED IN MINA & ARAFAT DURING HAJJ</li>
                            <li>Intra-Saudi logistics</li>
                            <li>Feeding</li>
                            <li>Hajj Rites books and souvenir</li>
                            <li>Airport Protocol both in Nigeria and Saudi Arabia</li>
                        </ul>
                    </p>
                    <div className="packageDetails-section-btn">
                        <a href="#">Book Now</a>
                    </div>
                </div>                                
            </div>
        </div>
    )
}
