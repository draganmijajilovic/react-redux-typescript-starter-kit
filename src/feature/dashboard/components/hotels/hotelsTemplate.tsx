import React from 'react';

interface HotelsTemplateProps {
    hotel: any;
}

export function HotelsTemplate(props: HotelsTemplateProps) {
    const getHoteldetails = () => {
        // dispatch get hotes details
    }
    return (
        <div style={{ display: 'flex', padding: '20px' }} onClick={getHoteldetails}>
            <img src={props.hotel?.image} alt={props.hotel?.name} width="250" height="250" />
            <div>{props.hotel?.name}</div>
        </div >
    )
}