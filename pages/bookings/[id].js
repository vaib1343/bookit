import Layout from 'components/layout/Layout';
import MyBookingDetail from 'components/booking/BookingDetail';
import { getSession } from 'next-auth/react';
import React from 'react';

const MyBookingDetailPage = () => {
    return (
        <>
            <Layout title='My bookings'>
                <MyBookingDetail />
            </Layout>
        </>
    );
};

export default MyBookingDetailPage;

export const getServerSideProps = async (context) => {
    const session = await getSession({ req: context.req });
    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }
    return {
        props: {
            session,
        },
    };
};