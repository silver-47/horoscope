import React from 'react';
import './Form.css'

const Form = () =>{
	return (
		<div class='container'>
			<div class='inside'>
				<h2>Get your Horoscope</h2>
				<input	name='Name' type="text"
						placeholder='Enter your Name here...'
						required autofocus/>
				<select name="Sign">
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
				<input type="submit" value="Submit" />
			</div>
		</div>
	);
}

export default Form;