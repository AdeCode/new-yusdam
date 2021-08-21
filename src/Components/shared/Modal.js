import React, {useState, forwardRef, useImperativeHandle} from 'react';
import ReactDOM from 'react-dom';

// const Modal = (props) => {
//     const [display, setDisplay] = useState(true);

//     const open = () =>{
//         setDisplay(true);
//     };

//     const close = () =>{
//         setDisplay(false);
//     };


//     if (display){

//         return ReactDOM.createPortal(
//             <div clasName="modal-wrapper">
//              <div clasName="modal-backdrop" onClick={close}>
//                 <div className="modal-box">                        
//                     {props.children}
//                 </div>
//              </div>            
//             </div>, document.getElementById("modal-root")
//         )
 
       
//     };
//     return null;
// }


const Modal = forwardRef((props, ref) => {
        const [display, setDisplay] = useState(true);
    
        useImperativeHandle(
            ref,
            () => {
                return {
                    openModal: ()=> open(),
                    close: () => close()
                }
            }            
        );

        const open = () => {
            setDisplay(true)
        };
    
        const close = () => {
            setDisplay(false)
        };
    

        if(display){
    
            return ReactDOM.createPortal(
                <div className="modal-wrapper">
                    <div className="modal-backdrop">
                        <div className="modal-box">                        
                            {props.children}
                        </div>
                    </div>            
                </div>, document.getElementById("modal-root")
            )        
        }    
    
        return null;
    }
);
export default Modal