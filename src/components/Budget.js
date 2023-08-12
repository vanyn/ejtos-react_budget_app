
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, remaining, currency } = useContext(AppContext);

    const handleSetBudget = (budget) => {

        if (budget > 20000) {
            alert(`The budget cannot exceed ${currency}20,000`);
            return;
        }

        if (remaining <= 0) {
            alert(`You cannot reduce the budget lower than current spending`);
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: budget,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    step='10'
                    id='budget'
                    value={budget}
                    onChange={(event) => handleSetBudget(parseInt(event.target.value))}>
                </input>
            </span>
        </div>
    );
};

export default Budget;