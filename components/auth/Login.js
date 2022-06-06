import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import ButtonLoader from 'components/layout/ButtonLoader';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        const result = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });
        setLoading(false);
        if (result.error) {
            toast.error(result.error);
        } 
        else {
            router.push('/');
        }
    };
    return (
        <>
            <div className='container container-fluid'>
                <div className='row wrapper'>
                    <div className='col-10 col-lg-5'>
                        <form className='shadow-lg'>
                            <h1 className='mb-3'>Login</h1>
                            <div className='form-group'>
                                <label htmlFor='email_field'>Email</label>
                                <input type='email' id='email_field' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='password_field'>Password</label>
                                <input type='password' id='password_field' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <a href='#' className='float-right mb-4'>
                                Forgot Password?
                            </a>

                            <button id='login_button' onClick={handleSubmit} className='btn btn-block py-3' disabled={loading}>
                                {loading ? <ButtonLoader /> : "LOGIN"}
                            </button>

                            <a href='#' className='float-right mt-3'>
                                New User?
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
