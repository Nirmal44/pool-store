import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Container from '../Layouts/Container';

const CustomerDatabase = () => {

    const navigate = useNavigate()
    const user = useSelector((state) => state.authReducer.authData)

    useEffect(() => {
        !user && navigate('/login')
    }, [])

    return (
        <>
            <Toaster position="top-right" reverseOrder={false} />
            {user &&
                <Container>
                    <div className='d-flex justify-content-center align-item-center mt-5'>
                        <h1>CustomerDatabase</h1>
                    </div>
                </Container>
            }
        </>
    );
}

export default CustomerDatabase;
