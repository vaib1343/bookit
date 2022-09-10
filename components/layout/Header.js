import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from 'redux/actions/authAction';
import { signOut, useSession } from 'next-auth/react';
import { GET_USER } from 'redux/constants/authConstant';

export default function Header() {
    const { data: session, status } = useSession();
    const dispatch = useDispatch();
    const { user, loader } = useSelector((state) => state.user);
    useEffect(() => {
        if (!Object.keys(user).length) {
            dispatch(getUserDetails());
        }
    }, [dispatch, user]);
    const renderLoginOrAvatar = () => {
        if (!loader.includes(GET_USER.pending) && Object.keys(user).length) {
            return (
                <>
                    <div className='ml-4 dropdown d-line'>
                        <a className='btn dropdown-toggle mr-4' id='dropDownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                            <figure className='avatar avatar-nav'>
                                <img src={user?.avatar?.url} alt={user?.name} className='rounded-circle' />
                            </figure>
                            <span>{user?.name}</span>
                        </a>
                        <div className='dropdown-menu' aria-labelledby='dropDownMenuButton'>
                            <Link href='/bookings/me'>
                                <a className='dropdown-item'>My bookings</a>
                            </Link>
                            <Link href='/me/update'>
                                <a className='dropdown-item'>Profile</a>
                            </Link>
                            <div
                                onClick={async () => {
                                    await signOut();
                                }}>
                                <a className='dropdown-item text-danger'>Logout</a>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else if (status === "unauthenticated") {
            return (
                <Link href='/login'>
                    <a className='btn btn-danger px-4 text-white login-header-btn float-right'>Login</a>
                </Link>
            );
        }
    };
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
                    <div className='col-3 mt-md-0 text-center'>{renderLoginOrAvatar()}</div>
                </div>
            </nav>
        </>
    );
}
