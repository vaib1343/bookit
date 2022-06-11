import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const BookingDetail = () => {
    const { myBookingDetail } = useSelector((state) => state.booking);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch()
    }, []);

    return <></>;
};
