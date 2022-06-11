import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { MDBDataTable } from 'mdbreact';
import { getMyBookings } from 'redux/actions/bookingAction';

const MyBooking = () => {
    const dispatch = useDispatch();
    const { myBooking } = useSelector((state) => state.booking);
    useEffect(() => {
        dispatch(getMyBookings());
    }, []);

    const setBooking = () => {
        const data = {
            columns: [
                { label: 'Booking ID', field: 'id', sort: 'asc' },
                { label: 'Check In', field: 'checkin', sort: 'asc' },
                { label: 'Check Out', field: 'checkout', sort: 'asc' },
                { label: 'Amount', field: 'amount', sort: 'asc' },
                { label: 'Actions', field: 'actions', sort: 'asc' },
            ],
            rows: !!myBooking.length
                ? myBooking.map((booking) => ({
                      id: booking._id,
                      checkin: new Date(booking.checkInDate).toLocaleString('en-us'),
                      checkout: new Date(booking.checkOutDate).toLocaleString('en-us'),
                      amount: `$${booking.amountPaid || 0}`,
                      actions: (
                          <>
                              <Link href={`/bookings/${booking._id}`}>
                                  <a className='btn btn-primary'>
                                      <i className='fa fa-eye'></i>
                                  </a>
                              </Link>
                              <button className='btn btn-success mx-2'>
                                  <i className='fa fa-download'></i>
                              </button>
                          </>
                      ),
                  }))
                : [],
        };
        return data;
    };
    return (
        <>
            <div className='container container-fluid'>
                <h1 className='my-5'>My Bookings</h1>
                <MDBDataTable data={setBooking()} className='px-3' bordered striped hover />
            </div>
        </>
    );
};

export default MyBooking;
