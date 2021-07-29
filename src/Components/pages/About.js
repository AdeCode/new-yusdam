import React from 'react'
import SectionHeader from '../shared/SectionHeader';


export default function About() {


    return (
        <div>
            <SectionHeader 
                title = 'About Us'
                subtitle = 'Get To know Us'
            />
            <div className="about">
                <div className="about-col about-col-left">
                    <h2>About Yusdam-Fly Travels and Tours</h2>
                    <p>
                    Yusdam-fly Travels and Tours is a Company set up to provide Travel and related 
                    business to Corporate organizations and individuals. We are ranked among the top Management Companies 
                    in the market. We are IATA Certified and a member of ASTA ABTA and NANTA.
                    Our clientele base comprises a mixed breed of clients covering a wide geographical base.
                    </p>
                </div>
                <div className="about-col">
                    <div className="about-col about-right-img">
                        <img src="assets/images/pages/erik.jpg" alt="yusdam-about-image"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
