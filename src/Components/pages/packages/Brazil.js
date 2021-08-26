import React, {useRef} from 'react'
import SectionHeader from '../../shared/SectionHeader';
import PackageDetails from '../../shared/PackageDetails';
import Modal from '../../shared/Modal';
import BookNow from '../../shared/BookNow';


export default function Brazil() {
    const modalRef = useRef();

    const openModal = () => {
        modalRef.current.openModal();
    };
    
    const closeModal = () => {
        modalRef.current.close();
    };
    
    const location = {location: 'Brazil'};

    const UsePackage = { package: 'Brazil Carnival'}

    return (
        <div>
            <SectionHeader 
                title = 'Brazil Carnival And Tour'
                subtitle = 'Experience one of the best carnival in the world'
            />
    
            <PackageDetails>
                <div className="packageDetails-section-image">
                    <img src="/assets/images/pages/braziltwo.jpg" alt="" />
                </div>
                
                <div className="packageDetails-section-content">
                                                            
                    <div className="packageDetails-section-title">Description </div>
                        <div className="packageDetails-section-title-div">
                            <strong>The Rio Carnival</strong>
                            <p>
                            
                            The Rio Carnival is arguably the gretatest show on earth, the carnival
                            never fails to give any local or tourist the party of a life time
                            The carnival is one that gets everyone excited.
                            Aside from the extravagant carnival parade, the Rio Carnival is also 
                            known for throwing the best parties in town. If you want to rub elbows 
                            with the rich and famous or want to spot your favorite celebrity, 
                            better head out to the luxurious Magic Ball at the Copacabana Palace 
                            Hotel. You also need to know that the tickets to this ball don’t come 
                            cheap so if you want to go be prepared to spend money and prepare to 
                            dress up in black tie or fancy costume. If you are a bit tight on the 
                            budget, but don’t want to miss out on the party fever, you can go to 
                            the numerous street parties that are held at almost every corner of 
                            Rio. If you think you had your share of crazy parties and loud music, 
                            take a guided tour around Rio and check out the beautiful beaches, 
                            forests, and other natural locations which are truly a feast for the eyes.
                            </p>
                        </div>
                        <div className="packageDetails-section-title-div">
                            <strong>The Sao Paulo Carnival</strong>
                            <p>
                            
                            This is another major Brazillian carnival. It takes place is Anhembi
                            Sambadrome of Sao Paulo on the Friday and Saturday night of the week of Carnival.
                            The Sao Paulo Carnival is considered as the more affordable option to the Rio Carnival. 
                            If you find the Rio Brazil Carnival too expensive or if you ever run 
                            out of tickets, Sao Paulo is the best alternative since you will get 
                            the same type of energy and excitement when it comes to dancing and 
                            samba music.
                            </p>
                        </div>

                        <div className="packageDetails-section-title-div">
                            <strong>The Recife and Olinda Carnivals</strong>
                            <p>                            
                            The Carnivals in Recife and Olinda have a distinct style which is 
                            greatly influenced by the African and Indian tribes who were slaves 
                            during the Portuguese rule. People have the opportunity to experience 
                            the vibrant spirit of the Carnival by participating whole-heartedly 
                            rather than just watching from the sidelines. Although the official 
                            Carnival only  commence on Friday and ends on Fat Tuesday, the day 
                            before Lent starts; there are Carnival parties that kicks off as early 
                            as December. These events present the perfect atmosphere for families 
                            to enjoy their vacation
                            </p>
                        </div>
                    
                    <div className="packageDetails-section-title">Package Inclusions </div>                        
                        <p className="packageDetails-section-title-details">
                            <ul>
                                <li>Visa Processing</li>
                                <li>Accommodation</li>
                                <li>Ticketing</li>
                                <li>City Tour</li>
                                <li>Carnival Watch</li>
                                <li>Airport Pick-up and Drop-off</li>
                            </ul>
                        </p> 

                        
                </div>
            </PackageDetails>
            <div className="packageDetails-section">                
                <button onClick={openModal} className="packageDetails-section-btn">Book Now</button>                
                    <Modal ref={modalRef}>
                        <div className="btn-close" onClick={closeModal}>X</div>
                        <h1>Booking Form</h1>
                        <p>Fill all the fields here</p>
                        <BookNow 
                            location={location}
                        />                                                
                    </Modal>
            </div>     
        </div>
    )
}
