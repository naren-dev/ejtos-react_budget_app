import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch, totalExpenses } = useContext(AppContext);

    const editableBudget = (value) => {
        if(value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        } 

        if(value > 20000 ) {
          alert("You cannot set budget value higher than 20000");
          return;
        }

        dispatch({
          type: 'SET_BUDGET',
          payload: value,
        });

    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                step={10}
                required='required'
                type='number'
                id='cost'
                value={budget}
                size='10'
                onChange={(event) => editableBudget(event.target.value)}>
            </input> 
        </div>
    );
};

export default Budget;
