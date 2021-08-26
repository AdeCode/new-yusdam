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
                            <h3> Visit Dubai</h3>
                                <p>Explore the beauty of Dubai</p>
                                <div className="bookButton">
                                    <a href="">Details</a>
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
                                    <a href="">Details</a>
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
                                    <a href="">Details</a>
                                </div>
                            </div>    
                        </a>                                                                  
                    </div>   
                                
                </div>        
                <div className="tour-package-section-row">
                    <div className="tour-package-section-row-col">
                        <a href="/canada-visa">
                            <div className="tour-package-section-row-col-img-wrapper">
                                <img 
                                    src="/assets/images/pages/jason.jpg" 
                                    alt="Canada"
                                />                            
                            </div>
                            <div className="tour-package-section-row-col-content">
                                <h3>Canada Visa</h3>
                                <p>Live and Work in Canada</p>
                                <div className="bookButton">
                                    <a href="">Details</a>
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
                                    <a href="/seychelles">Details</a>
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
                                    <a href="">Details</a>
                                </div>
                            </div>
                        </a>                        
                    </div>                                   
                </div>  
                <div className="tour-package-section-row">
                    <div className="tour-package-section-row-col">
                        <a href="/brazil-carnival">
                            <div className="tour-package-section-row-col-img-wrapper">
                                <img 
                                    src="/assets/images/pages/brazil.jpg" 
                                    alt="Brazil"
                                />                            
                            </div>
                            <div className="tour-package-section-row-col-content">
                                <h3>Brazil Carnival and Tour</h3>
                                <p>Experience carnival like no other in Brazil</p>
                                <div className="bookButton">
                                    <a href="">Details</a>
                                </div>
                            </div>
                        </a>                        
                    </div>

                    <div className="tour-package-section-row-col">
                        <a href="/canada-study">
                            <div className="tour-package-section-row-col-img-wrapper">
                                <img 
                                    src="/assets/images/pages/download.jpeg" 
                                    alt="Visit Dubai"
                                />                            
                            </div>
                            <div className="tour-package-section-row-col-content">
                                <h3>STUDY IN CANADA</h3>
                                <p>Canada Visa and School Packages</p>
                                <div className="bookButton">
                                    <a href="">Details</a>
                                </div>
                            </div>
                        </a>                        
                    </div>

                    <div className="tour-package-section-row-col">
                        <a href="/zanzibar">
                            <div className="tour-package-section-row-col-img-wrapper">
                                <img 
                                    src="/assets/images/pages/zanzibar.jpg" 
                                    alt="Visit Dubai"
                                />                            
                            </div>
                            <div className="tour-package-section-row-col-content">
                                <h3>Visit Zanzibar, Tanzania</h3>
                                <p>A week of Zanzibar Holiday Experience</p>
                                <div className="bookButton">
                                    <a href="">Details</a>
                                </div>
                            </div>
                        </a>                        
                    </div>                                   
                </div>       
        </div>
        
    )
}
