import React, { useState } from 'react'
import SectionHeader from '../../shared/SectionHeader';
import PackageDetails from '../../shared/PackageDetails';
import Tab from '../packages/Tab';

export default function Dubai() {

    // const [click, setClick] = useState('false');
    // const [key, setKey] = useState('left');
           
    // const types = ['left', 'center','right'];
    // const [active, setActive] = useState(types[0]);

    return (
        <div>
            <SectionHeader 
                title = 'HAJJ Pilgrimage'
                subtitle = 'Our special packages for holy pilgrimage' 
            />
            <PackageDetails 

                image = '/assets/images/pages/adli.jpg'
                 
                features = 'Hajj Pilgrimage' 
                
                content='Hajj, the fifth pillar of Islam, 
                is an annual Islamic pilgrimage to Mecca, Saudi Arabia, the holiest city for Muslims. 
                Hajj is a mandatory religious duty for Muslims that must be carried out at least once in their 
                lifetime by all adult Muslims who are physically and financially capable of undertaking the 
                journey, and of supporting their family during their absence from home.
                male or female, free, adult and sane 
                to be performed once in lifetime (Qur’an 3:97). 
                Hajj is a major pilgrimage that has a specific time which 
                it can be performed unlike Umrah (lesser pilgrimage), that can be performed any time of the year. Hajj 
                (Arabic: حج‎ pilgrimage) is an Islamic pilgrimage to Makkah and the largest gathering of Muslim Ummah 
                (community) in the world every year. It is the last of the five pillars of Islam, and a religious duty 
                that must be carried out by every able-bodied Muslim who can afford to do so at least once in his or her 
                lifetime. The state of being physically and financially capable of performing the Hajj is called 
                istita’ah. The Hajj (Pilgrimage) occurs from the 8th to 12th Dhu al-Hijjah, the 12th and last month of 
                the Islamic calendar. The Islamic calendar is eleven or twelve days shorter than the Gregorian calendar 
                used mostly in the Western world, this made for the change in Gregorian date of the Hajj from year to year. 
                Ihram means the limit to both the garments and sacred prohibitions required of the pilgrims 
                (for either Hajj / Umrah or both) for the period it is worn till it is laid aside. 
                
                
                '

            />
            
            <div className="packageDetails-section">
                <h2 className="packageDetails-section-title">Hajj Packages</h2>
                <Tab/>                                
            </div>           
        </div>
    )
}
