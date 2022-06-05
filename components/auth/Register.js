import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import ButtonLoader from 'components/layout/ButtonLoader';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleSubmit = () => {

    }
    return (
        <>
            <div className='container'>
                <div></div>
            </div>
        </>
    );
};

export default Register;
