import React from 'react';
import { useDispatch } from 'react-redux';
import { getHotelDetail } from '../../../../shared/auth/actions/actions';

interface HotelsTemplateProps {
    hotel: any;
}

export function HotelsTemplate(props: HotelsTemplateProps) {
    const dispatch = useDispatch();
    let hotelDetails = null;
    const getHoteldetails = () => {
        hotelDetails = dispatch(getHotelDetail(props.hotel?.id));
    }
    return (
        <div style={{ display: 'flex', padding: '20px' }} onClick={getHoteldetails}>
            <img src={props.hotel?.image} alt={props.hotel?.name} width="250" height="250" />
            <div>{props.hotel?.name}</div>
        </div >
    )
}