import React, { useState } from 'react'
import SectionHeader from '../shared/SectionHeader';
import { useInput } from '../mini-components/useInput';
import {send} from 'emailjs-com';


export default function Contact() {
   
    const {value:firstName, bind: bindFirstName, reset:resetFirstName} = useInput('');
    const {value:lastName, bind: bindLastName, reset:resetLastName} = useInput('');
    const {value:email, bind: bindEmail, reset:resetEmail} = useInput('');
    const {value:message, bind: bindMessage, reset:resetMessage} = useInput('');

    const [errorMessage, setErrorMessage]=useState('');

   //get data from the form
    const sendData = {
        firstName: `${firstName} ${lastName}`,
        email:email,
        message: message,
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        if(firstName == ''){
            setErrorMessage('First name is required')
        }else if(email == ''){
            setErrorMessage('EMail field is required')
        }else if(message == ''){
            setErrorMessage('Message field can not be empty')
        }
        //alert(`Submitting firstname: ${firstName} ${lastName} ${email} ${message}`);
        resetFirstName();
        resetLastName();
        resetEmail();
        resetMessage();

        send(
            'service_4zd8ebb',
            'template_soa37nc',
            sendData,
            'user_atExUcCNxoJYOXd2hp9d8'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('message sent successfully');
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });

    }

    return (
       <section clasName="contact">
           <SectionHeader 
                title = 'CONTACT US'
                subtitle = 'We would be glad to hear from you'
           />
           <div className="contact-row">
               <div className="contact-row-col">
                    <img src="assets/images/pages/contact.jpg"/>
               </div>
               <div className="contact-row-col contact-col">
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
                                <input type="email" placeholder="Email" {...bindEmail}/>
                            </label>
                        </div>
                        <div className="inputGroup textarea">
                            <label>                                
                                <textarea type="text" rows="5" placeholder="Your Message" 
                                {...bindMessage}
                                required/>
                            </label>
                        </div>
                        <div className="inputGroup ">
                            <input type="submit" value="submit" 
                            required/>
                        </div>     
                        <div className="error">{errorMessage}</div>
                   </form>
               </div>
           </div>

       </section>
    )
}
