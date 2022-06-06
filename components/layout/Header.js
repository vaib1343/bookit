import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from 'redux/actions/authAction';

const Header = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    useEffect(() => {
            dispatch(getUserDetails());
    }, []);
    return (
        <>
            <nav className='navbar row justify-content-center sticky-top'>
                <div className='container'>
                    <div className='col-3 p-0'>
                        <div className='navbar-brand'>
                            <Link href={`/`}>
                                <a>
                                    <img style={{ cursor: 'pointer' }} src='/images/bookit_logo.png' alt='BookIT' />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className='col-3 mt-md-0 text-center'>
                        <Link href='/login'>
                            <a className='btn btn-danger px-4 text-white login-header-btn float-right'>Login</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
