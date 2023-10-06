import React from 'react';
import { useState } from 'react';

const BookingForm = (props) => {
    const [guests, setGuests] =useState("");
    const [occasion, setOccasion] =useState("");
    const [date, setDate] =useState("")
    const [time, setTime] =useState("")
    

    const handleSubmit= (e) => {
        e.preventDefault();
        props.submitForm(e);
    };
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='reserve-date'>Pick Date:</label>
                            <input id='reserve-date' value={date} onChange={(e) => handleChange(e.target.value)}
                            type='date' required/>
                        </div>
                        <div>
                            <label htmlFor='reserve-time'>Pick Time:</label>
                            <select id="reserve-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                                <option value="">Pick a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor='reserve-guests'>Number of Guests:</label>
                            <input id='reserve-guests' min='1' value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required></input>
                        </div>
                        <div>
                            <label htmlfor='reserve-occasion'>Occasion:</label>
                            <select id='reserve-occasion' key={occasion} value={occasion} onChange= {(e) => setOccasion(e.target.value)} required>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Retirement</option>
                            </select>
                        </div>
                        <div>
                            <input aria-label='On Click' type={'submit'} value={"Confirm your Reservation"}></input>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;