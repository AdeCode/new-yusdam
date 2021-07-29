import React from 'react'

export default function SectionHeader({title, subtitle}) {
    return (
        <div className="section">
            <div className="section-title">{title}</div>
            <div className="section-subTitle">{subtitle}</div>
        </div>
    );
}
