import React, {useRef, useState} from 'react'
import SectionHeader from '../../shared/SectionHeader';
import PackageDetails from '../../shared/PackageDetails';
import Modal from '../../shared/Modal';
import { useInput } from '../../mini-components/useInput';
import BookNow from '../../shared/BookNow'
import {send} from 'emailjs-com';


export default function Seychelles() {

    const {value:firstName, bind: bindFirstName, reset:resetFirstName} = useInput('');
    const {value:lastName, bind: bindLastName, reset:resetLastName} = useInput('');
    const {value:email, bind: bindEmail, reset:resetEmail} = useInput('');
    const {value:phone_no, bind: bindphone_no, reset:resetphone_no} = useInput('');
    const {value:dateOfBooking, bind: binddateOfBooking, reset:resetdateOfBooking} = useInput('');
    const {value:noOfPeople, bind: bindnoOfPeople, reset:resetnoOfPeople} = useInput('');

    const [errorMessage, setErrorMessage]=useState('');

    //get data from the form
    const sendData = {
        firstName: `${firstName} ${lastName}`,
        email:email,
        phone_no: phone_no,
        dateOfBooking: dateOfBooking,
        noOfPeople: noOfPeople,
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if(firstName == ''){
            setErrorMessage('Firstname is required')
        }else if(lastName == ''){
            setErrorMessage('Lastname field is required')
        }else if(email == ''){
            setErrorMessage('Email field is required')
        }else if(phone_no == ''){
            setErrorMessage('Phone number field is required')
        }else if(dateOfBooking == ''){
            setErrorMessage('Date of booking field is required')
        }else if(noOfPeople == ''){
            setErrorMessage('Number of people field is required')
        }
        //alert(`Submitting firstname: ${firstName} ${lastName} ${email} ${message}`);
        resetFirstName();
        resetLastName();
        resetEmail();
        resetphone_no();
        resetdateOfBooking();
        resetnoOfPeople();

        send(
            'service_4zd8ebb',
            'template_soa37nc',
            sendData,
            'user_atExUcCNxoJYOXd2hp9d8'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your booking has been received');
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });

    };

    const modalRef = useRef();

    const openModal = () => {
        //evt.preventDefault();
        modalRef.current.openModal();
    };
    
    const closeModal = () => {
        modalRef.current.close();
    };

    return (
        <div>
            <SectionHeader 
                title = 'VISIT SEYCHELLES'
                subtitle = 'Experience Seychelles'
            />
            <PackageDetails 

                image = '/assets/images/pages/seych.jpg'
                 
                features = 'One week visitation' 
                
                content='With all the exquisite attractions and activities 
                the glorious country has to offer, we are your stepping 
                stone to making sure that you get the holiday experience 
                of a lifetime. We offer services varying from guided tours, 
                to exclusive activities at sea. Tours and Excursion 
                Seychelles is your solution to a stress free vacation. 
                We aim to bring services at your doorstep. Our motto is 
                simple.'

                url='/booknow'
            />
            <div className="packageDetails-section">
                <div className="packageDetails-section-btn">
                    <a href="" onClick={openModal}>Book Now</a>
                    <Modal ref={modalRef}>
                        <div className="btn-close" onClick={closeModal}>X</div>
                        <h1>Booking Form</h1>
                        <p>Make your booking right here</p>
                        <div className="form-container">
                            <form onSubmit={handleSubmit}>
                                <div className="inputRow">
                                    <div className="inputRow-col">
                                        <label>                               
                                            <input 
                                                type="text" 
                                                placeholder="First Name"                                    ﻿
                                                {...bindFirstName}
                                                required/>
                                        </label>
                                    </div>
                                    <div className="inputRow-col">
                                        <label>                                
                                            <input type="text" placeholder="Last Name" 
                                            {...bindLastName}
                                            />
                                        </label>
                                    </div>
                                </div>
                                <div className="inputGroup">
                                    <label>                                
                                        <input type="email" placeholder="Email" 
                                        {...bindEmail} required/>
                                    </label>
                                </div>
                                
                                <div className="inputGroup">
                                    <label>                                
                                        <input type="number" placeholder="Phone Number" 
                                        {...bindphone_no} required/>
                                    </label>
                                </div>

                                <div className="inputGroup">
                                    <label>                                
                                        <input type="date" placeholder="Email" 
                                        {...binddateOfBooking} required/>
                                    </label>
                                </div>

                                <div className="inputGroup">
                                    <label>                                
                                        <input type="number" placeholder="Number of people" 
                                        {...bindnoOfPeople} required/>
                                    </label>
                                </div>
                                
                                <div className="inputGroup ">
                                    <input type="submit" value="submit" 
                                    required/>
                                </div>     
                                <div className="error">{errorMessage}</div>
                            </form>
                        </div>
                    </Modal>
                </div>
            </div>            
        </div>
    )
}
