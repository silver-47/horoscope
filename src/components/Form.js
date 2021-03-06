import React from 'react';
import './Form.css'

const Form = ({ name, sign, submit }) =>{
	return (
		<div>
			<h1>Get your Horoscope</h1>
			<div className='inputs'>
				<input	name='Name' type="text"
						placeholder='Enter Your Name here...'
						autoFocus
						onChange={name}/>
				<select name="Sign" onChange={sign}>
						<option value="Aries">Aries</option>
						<option value="Taurus">Taurus</option>
						<option value="Gemini">Gemini</option>
						<option value="Cancer">Cancer</option>
						<option value="Leo">Leo</option>
						<option value="Virgo">Virgo</option>
						<option value="Libra">Libra</option>
						<option value="Scorpio">Scorpio</option>
						<option value="Sagittarius">Sagittarius</option>
						<option value="Capricorn">Capricorn</option>
						<option value="Aquarius">Aquarius</option>
						<option value="Pisces">Pisces</option>
				</select>
			</div>
			<input type="submit" value="Get" onClick={submit}/>
		</div>
	);
}

export default Form;