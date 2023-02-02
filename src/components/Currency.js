import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {

    const { dispatch, currency } = useContext(AppContext);

    const changeCurrency = (value) => {
    	dispatch({
    		type: 'CHG_CURRENCY',
    		payload: value,
    	});
  	}

    return ( 
	      <div className="btn btn-success " >
	        <label htmlFor="currency">Currency: </label>
	        <select
	          className='btn btn-success dropdown-toggle'
	          name="currency"
	          defaultValue={currency}
	          id="currency"
	          onChange={(event) => changeCurrency(event.target.value)}
	        >
	          	<option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
	        </select>
	      </div> 
    );
};

export default Currency;