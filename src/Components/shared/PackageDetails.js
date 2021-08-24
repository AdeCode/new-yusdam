import React from 'react'
//{image, features, price, content, url}
export default function PackageDetails(props) {
    
    //const contentArray = content.split('(b)');
    //console.log(contentArray);

    return (
        <div className="packageDetails-section">
            {props.children}
            {/* <div className="packageDetails-section-image">
                <img src={image} alt="" />
            </div>
            <div className="packageDetails-section-features">
                <div className="packageDetails-section-title">Features </div>
                {features}
            </div>
            {/* <div className="packageDetails-section-price">
                <div className="packageDetails-section-title">Price: </div>
                {price}
            </div> */}
            {/* <div className="packageDetails-section-content">
            <div className="packageDetails-section-title">Description </div>
                {contentArray}
            </div> */} 
        </div>
    );
}
