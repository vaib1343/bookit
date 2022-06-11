import Layout from 'components/layout/Layout';
import Profile from 'components/user/Profile';
import { getSession } from 'next-auth/react';
import React from 'react';

const UpdateProfilePage = () => {
    return (
        <>
            <Layout title='update profiel'>
                <Profile />
            </Layout>
        </>
    );
};

export default UpdateProfilePage;

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