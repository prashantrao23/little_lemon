import { useReducer } from "react";
import { fetchAPI, submitAPI } from "../bookingsAPI";
import HeroImage from "../assets/food/food4.webp";
import { useNavigate } from 'react-router-dom';
import React from 'react'
import FormValidation from "./sections/reservePages/Form";

const BookingPage = () => {

    let navigate = useNavigate();

    function initializeTimes() {
        // Create a Date object to represent today's date
        const today = new Date();
        // Format the date as "YYYY-MM-DD" (e.g., "2023-09-25")
        const formattedDate = today.toISOString().split('T')[0];

        // Use the fetchAPI function to get available times for today's date
        const availableTimes = fetchAPI(formattedDate);

        return availableTimes;
    }

    function updateTimes(state, selectedDate) {
        // Use the fetchAPI function to get available times for the selected date
        const availableTimes = fetchAPI(selectedDate);

        return availableTimes;
    }


    const submitForm = (formData) => {
        // Assuming that submitAPI(formData) returns true upon successful booking
        const isBookingSuccessful = submitAPI(formData);

        if (isBookingSuccessful) {
            navigate('/confirmation'); // Navigate to the booking confirmation page
        }
    };



    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, [], initializeTimes);

    return (
        <>
            <header className="reserve-table">
                <img className="header-reserve" src={HeroImage} alt="Little Lemon Ingredients" />
                <div className="reserve-header-text">
                    <h1>Reserve a table</h1>
                </div>
            </header>
            <FormValidation availableTimes={availableTimes} dispatchAvailableTimes={dispatchAvailableTimes} onSubmit={submitForm} />
        </>
    )
}

export default BookingPage