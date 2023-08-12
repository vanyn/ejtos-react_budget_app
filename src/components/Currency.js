
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const handleSetCurrency = (currency) => {

        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Currency:
                <select className="custom-select" id="inputGroupSelect01" onChange={(event) => handleSetCurrency(event.target.value)}>
                    <option defaultValue value="$" name="dollar">$ Dollar</option>
                    <option value="£" name="pound">£ Pound</option>
                    <option value="€" name="euro">€ Euro</option>
                    <option value="₹" name="ruppee">₹ Ruppee</option>
                </select>
            </span>
        </div>
    );
};

export default Currency;