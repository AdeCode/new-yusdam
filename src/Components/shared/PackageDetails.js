import React from 'react'

export default function PackageDetails({image, features, price, content, url}) {
    
    const contentArray = content.split('(b)');
    console.log(contentArray);

    return (
        <div className="packageDetails-section">
            <div className="packageDetails-section-image">
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
            <div className="packageDetails-section-content">
            <div className="packageDetails-section-title">Description </div>
                {contentArray}
            </div>
            <div className="packageDetails-section-btn">
                <a href={url}>Book Now</a>
            </div>
        </div>
    );
}
