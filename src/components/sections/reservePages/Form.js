import React, { useState } from 'react';

function FormValidation(props) {


    // const [finalTime, setFinalTime] = useState(
    //     props.availableTimes.map((times) => <option>{times}</option>)
    // );

    // function handleDateChange(e) {
    //     const dateString = e.target.value;
    //     const date = new Date(dateString);

    //     // Update the state with the selected date
    //     setFormData({ ...formData, date: dateString });

    //     // Call your function to update times based on the selected date
    //     props.updateTimes(date);
    // }

    // State to manage form fields and validation
    const [formData, setFormData] = useState({
        email: '',
        fname: '',
        lName: '',
        phonenum: '',
        people: '',
        date: '',
        time: '', // Added a state variable for time
        occasion: 'None',
        preferences: 'None',
        comments: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        fname: '',
        lName: '',
        phonenum: '',
        people: '',
        date: '',
    });

    // const [availableTimes] = useState([
    //     '17:00',
    //     '18:00',
    //     '19:00',
    //     '20:00',
    //     '21:00',
    // ]);

    // Helper function to handle form input changes
    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'date') {
            props.dispatchAvailableTimes(value);
          }
    }

    // Helper function to validate the form
    function validateForm() {
        let valid = true;
        const newErrors = { ...errors };

        // Add your validation logic for each field here
        if (formData.fname.trim() === '') {
            valid = false;
            newErrors.fname = 'Name is required';
        } else {
            newErrors.fname = '';
        }

        if (formData.lName.trim() === '') {
            valid = false;
            newErrors.lName = 'Name is required';
        } else {
            newErrors.lName = '';
        }

        if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/)) {
            valid = false;
            newErrors.email = 'Email is not valid';
        } else {
            newErrors.email = '';
        }

        // Add validation for other fields as needed

        setErrors(newErrors);
        return valid;
    }


    // Handle form submission
    function handleSubmit(e) {
        e.preventDefault();

        props.onSubmit(formData);

        if (validateForm()) {
            // Valid form submission logic here
            console.log('Form is valid:', formData);
        } else {
            console.log('Form is not valid');
        }
    }

    return (
        <div className="reservation-form">

            <h1>Form Validation</h1>
            <form onSubmit={handleSubmit} className='col-12 col-md-8 col-lg-6'>
                <div className="mb-3">
                    <label className="form-label" htmlFor="fName">First Name</label>
                    <input className="form-control" type="text" id="fName" name="fname" placeholder="First Name" required minLength={2} maxLength={50} value={formData.fname} onChange={handleInputChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="lName">Last Name</label>
                    <input className="form-control" type="text" id="lName" name="lName" placeholder="Last Name" minLength={2} maxLength={50} value={formData.lName} onChange={handleInputChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-control" type="email" id="email" name="email" placeholder="Email" value={formData.email} required minLength={4} maxLength={200} onChange={handleInputChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="phonenum">Phone Number</label>
                    <input className="form-control" type="tel" id="phonenum" name="phonenum" placeholder="(xxx)-xxx-xxxx" value={formData.phonenum} required minLength={10} maxLength={25} onChange={handleInputChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="people">Number of People</label>
                    <input className="form-control" type="number" id="people" name="people" placeholder="Number of People" value={formData.people} required min={1} max={100} onChange={handleInputChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="date">Select Date</label>
                    <input className="form-control" type="date" id="date" name="date" required value={formData.date} onChange={handleInputChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="time">Select Time</label>
                    <select className="form-select" id="time" name="time" required value={formData.time} onChange={handleInputChange}>
                        {props.availableTimes.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="occasion">Occasion</label>
                    <select className="form-select" id="occasion" name="occasion" value={formData.occasion} onChange={handleInputChange}>
                        <option>None</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="preferences">Seating preferences</label>
                    <select className="form-select" id="preferences" name="preferences" value={formData.preferences} onChange={handleInputChange}>
                        <option>None</option>
                        <option>Indoors</option>
                        <option>Outdoor (Patio)</option>
                        <option>Outdoor (Sidewalk)</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="comments">Additional Comments</label>
                    <textarea className="form-control" id="comments" name="comments" rows={8} cols={50} placeholder="Additional Comments" value={formData.comments} onChange={handleInputChange}></textarea>
                </div>

                <div>
                    <button className="btn action-button" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default FormValidation;
