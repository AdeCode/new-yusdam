import React, { useState, useRef, useEffect } from 'react'
import SectionHeader from '../shared/SectionHeader';
import { useInput } from '../mini-components/useInput';
import {send} from 'emailjs-com';


export default function BookNow(props) {


    const useLocation = props.location;
    const usePackage = props.package;
    //const [useLocation, setUseLocation] = useState();
    
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
        location: useLocation.location,
        //package: usePackage.package,
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
        console.log(`Submitting firstname: ${firstName} ${lastName} ${email} ${phone_no} ${dateOfBooking} ${noOfPeople} ${useLocation.location}`);

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

    }

    
    return (
              
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
    )
}
