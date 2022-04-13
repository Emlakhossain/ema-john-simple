import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipping = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    // const navigate = useNavigate();

    const handleNameOnblur = event => {
        setName(event.target.value);
    }
    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }


    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameOnblur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Phone</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="" />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Shipping" />
                </form>

            </div>
        </div >
    );
};

export default Shipping;