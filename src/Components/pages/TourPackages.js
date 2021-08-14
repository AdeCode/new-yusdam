import React from 'react'
import SectionHeader from '../shared/SectionHeader';

export default function TravelPackage({country, price}) {
    return (                                          
            <div className="tour-package-section">   
            <SectionHeader 
                title = 'Our Tour Packages'
                subtitle = 'Our special and pocket friendly packages'
            />                    
                <div className="tour-package-section-row">

                    <div className="tour-package-section-row-col">
                        <a href="/dubai">
                            <div className="tour-package-section-row-col-img-wrapper">
                                <img 
                                    src="/assets/images/pages/jeshoots.jpg" 
                                    alt="Visit Dubai"
                                />                            
                            </div>
                            <div className="tour-package-section-row-col-content">
                            <h3>Dubai Residency Visa</h3>
                                <p>2 &amp; 3 years residency Visa</p>
                                <div className="bookButton">
                                    <a href="">Book Now</a>
                                </div>
                            </div>
                        </a>                        
                    </div>
                    <div className="tour-package-section-row-col">
                        <a href="/pilgrimage">
                            <div className="tour-package-section-row-col-img-wrapper">
                                <img 
                                    src="/assets/images/pages/adli.jpg" 
                                    alt="Visit Dubai"
                                />                            
                            </div>
                            <div className="tour-package-section-row-col-content">
                            <h3>Pilgrimage Tour</h3>
                                <p>7 Days, 8 Nights start From</p>
                                <div className="bookButton">
                                    <a href="">Book Now</a>
                                </div>                           
                            </div>
                        </a>                        
                    </div>

                    <div className="tour-package-section-row-col">
                        <a href="/#">
                            <div className="tour-package-section-row-col-img-wrapper">
                                <img 
                                    src="/assets/images/pages/santo.jpg" 
                                    alt="Visit Dubai"
                                />                            
                            </div>
                            <div className="tour-package-section-row-col-content">
                                <h3>Santorini Tour</h3>
                                <p>2 &amp; 3 years residency Visa</p>
                                <div className="bookButton">
                                    <a href="">Book Now</a>
                                </div>
                            </div>    
                        </a>                                                                  
                    </div>   
                                
                </div>        
                <div className="tour-package-section-row">
                    <div className="tour-package-section-row-col">
                        <a href="/#">
                            <div className="tour-package-section-row-col-img-wrapper">
                                <img 
                                    src="/assets/images/pages/unsplash.jpg" 
                                    alt="Pilgrimage tour"
                                />                            
                            </div>
                            <div className="tour-package-section-row-col-content">
                                <h3>Pilgrimage Tour</h3>
                                <p>7 Days, 8 Nights start From</p>
                                <div className="bookButton">
                                    <a href="">Book Now</a>
                                </div>
                            </div>
                        </a>                        
                    </div>

                    <div className="tour-package-section-row-col">
                        <a href="/#">
                            <div className="tour-package-section-row-col-img-wrapper">
                                <img 
                                    src="/assets/images/pages/seych.jpg" 
                                    alt="Visit Dubai"
                                />                            
                            </div>
                            <div className="tour-package-section-row-col-content">
                                <h3>TOUR TO SEYCHELLES</h3>
                                <p>2 &amp; 3 years residency Visa</p>
                                <div className="bookButton">
                                    <a href="">Book Now</a>
                                </div>
                            </div>
                        </a>                        
                    </div>

                    <div className="tour-package-section-row-col">
                        <a href="/#">
                            <div className="tour-package-section-row-col-img-wrapper">
                                <img 
                                    src="/assets/images/pages/erik.jpg" 
                                    alt="Visit Dubai"
                                />                            
                            </div>
                            <div className="tour-package-section-row-col-content">
                                <h3>Dubai Residency Visa</h3>
                                <p>2 &amp; 3 years residency Visa</p>
                                <div className="bookButton">
                                    <a href="">Book Now</a>
                                </div>
                            </div>
                        </a>                        
                    </div>                                   
                </div>         
        </div>
        
    )
}
