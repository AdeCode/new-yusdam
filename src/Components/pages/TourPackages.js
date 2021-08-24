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
                        <a href="/hajj">
                            <div className="tour-package-section-row-col-img-wrapper">
                                <img 
                                    src="/assets/images/pages/adli.jpg" 
                                    alt="Hajj Pilgrimage"
                                />                            
                            </div>
                            <div className="tour-package-section-row-col-content">
                            <h3>Pilgrimage Tour</h3>
                                <p>Holy Pilgrimage to Makkah</p>
                                <div className="bookButton">
                                    <a href="">Book Now</a>
                                </div>                           
                            </div>
                        </a>                        
                    </div>

                    <div className="tour-package-section-row-col">
                        <a href="/santorini">
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
                        <a href="/seychelles">
                            <div className="tour-package-section-row-col-img-wrapper">
                                <img 
                                    src="/assets/images/pages/seych.jpg" 
                                    alt="Visit Dubai"
                                />                            
                            </div>
                            <div className="tour-package-section-row-col-content">
                                <h3>VISIT SEYCHELLES</h3>
                                <p>2 &amp; 3 years residency Visa</p>
                                <div className="bookButton">
                                    <a href="/seychelles">Book Now</a>
                                </div>
                            </div>
                        </a>                        
                    </div>

                    <div className="tour-package-section-row-col">
                        <a href="/dubai-2-years">
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
