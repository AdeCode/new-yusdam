import React, { forwardRef } from 'react'
import SectionHeader from '../../shared/SectionHeader';
import PackageDetails from '../../shared/PackageDetails';

export default function Dubai() {

    

    return (
        <div>
            <SectionHeader 
                title = 'SANTORINI TOUR PACKAGE'
                subtitle = 'Experience Santorini'
            />
            <PackageDetails 

                image = '/assets/images/pages/santo.jpg'
                 
                features = 'One week visitation' 
                
                content='Santorini is the supermodel of the Greek islands, a head-turner whose face is 
                instantly recognizable around the world: multicolored cliffs soar out of a sea-drowned 
                volcanic crater, topped by whitewahsed buildings.
                (b)
                With its reputation for dazzling panoramas, romantic sunsets and volcanic-sand beaches, it is 
                hardly surpprising Santorini features on so many traveles bucket lists. There is no denying the 
                uniqueness of this place of its hge allure: the island hosts 2 million visitors annually, leading
                some question whether Santorini has become a victim of overtourism.
                (b)
                Part of the Cyclades island group, Santorini; officially known as Thira, a name that encompasses the volcanic
                islets within Santorini orbit sits in the Aegean sea, roughly halfway between Athens and Crete. The 
                island is shaped like a whonky croissant, and the neighboring islets hint at the fact that Santorini  
                was once circular. It was knwon as Strongili (the Round one). Thousands o fyears ago, a huge volcanic eruption 
                caused the center of Strongili to sink, leaving a caldera or carter with towering cliffs along the 
                east side, now Santorinis trademark landscape.'

                url='/booknow'
            />
            <div className="packageDetails-section">
                <div className="packageDetails-section-btn">
                    <a href="#">Book Now</a>
                </div>
            </div>            
        </div>
    )
}
