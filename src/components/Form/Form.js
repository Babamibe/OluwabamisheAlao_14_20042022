import React from 'react';
import DatePicker from '../Calendar/DatePicker';
import {states} from '../../data/states'
import './Form.css'
import { departments } from '../../data/departements';

/**
 * Create a form
 * @param {Function} handleNewEmployee
 * @param {Function} setIsVisible 
 * @returns Component
 */
function Form({handleNewEmployee, setIsVisible}) {
    //initial state of data before input
    const initialState = {
        firstName: "",
        lastName: "",
        dateOfBirth: "dd/mm/yyyy",
        startDate: "dd/mm/yyyy",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        department: ""
    }
    const [formData, setFormData] = React.useState(initialState)

    /**
     * Handle input change
     * @param {Event} event
     * @listens Event 
     */
    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name] : value
        }))
    }

    /**
     * Handle date selection
     * @param {String} name 
     * @param {String} value 
     */
    function handleDateChange(name, value) {
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    /**
     * handle form submission, create new employee, open confirmation modal and reset the form
     *  @param {Object} formData
     *  @param {Event} e 
     * @listens Event
     */
    function handleSubmit(e) {
        e.preventDefault()
        handleNewEmployee(formData)
        setIsVisible(true)
        setFormData(initialState)
    }

    return (
        <>
            <form onSubmit={handleSubmit} id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input 
                required
                type="text" 
                id="first-name"
                name='firstName'
                onChange={handleChange}
                value={formData.firstName}
                className="input" 
                />

                <label htmlFor="last-name">Last Name</label>
                <input 
                required
                type="text" 
                id="last-name"
                name='lastName'
                value={formData.lastName}
                onChange={handleChange} 
                className="input"
                />

                <DatePicker
                id={"date-of-birth"}
                content={"Date of Birth"}
                name={"dateOfBirth"}
                date={formData.dateOfBirth}
                handleChange={handleChange}
                handleDateChange={handleDateChange}
                />

                <DatePicker
                id={"start-date"}
                content={"Start Date"}
                name={"startDate"}
                date={formData.startDate}
                handleChange={handleChange}
                handleDateChange={handleDateChange}
                />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input 
                    required 
                    id="street" 
                    type="text"
                    name='street'
                    value={formData.street}
                    onChange={handleChange} 
                    className="input"
                    />

                    <label htmlFor="city">City</label>
                    <input 
                    required
                    id="city" 
                    type="text" 
                    name='city'
                    value={formData.city}
                    onChange={handleChange}
                    className="input"
                    />
                    

                    <label htmlFor="state">State</label>
                    <select 
                    required
                    name="state" 
                    id="state" 
                    onChange={handleChange}
                    value={formData.state}
                    className="input"
                    >
                        <option value="">-- Select --</option>
                        {states.map(state => (<option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>))}
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input 
                    required
                    id="zip-code" 
                    type="number"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="input"
                    />
                    
                </fieldset>

                <label htmlFor="department">Department</label>
                <select 
                required
                name="department" 
                id="department"
                onChange={handleChange}
                value={formData.department}
                className="input"
                >
                    <option value="">-- Select --</option>
                    {departments.map(departement => (<option key={departement.id} value={departement.name}>{departement.name}</option>))}
                </select>
                <button className='save'>Save</button>
            </form>

        </>
    );
}

export default Form;