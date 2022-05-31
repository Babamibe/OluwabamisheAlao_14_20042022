import React from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

/**
 * create a date picker
 * @param {Function} handleChange
 * @param {Function} handleDateChange
 * @param {String} id
 * @param  {String} name
 * @param {String} date
 * @param {String} content
 * @returns Component
 */
function DatePicker({id, content, name, date, handleChange, handleDateChange}) {
    const [value, setValue] = React.useState(new Date())
    const [visible, setVisible] = React.useState(false)
    
    /**
     * open calendar
     */
    function showCalendar() {
        setVisible(prevState => !prevState)
    }
    
    
    /**
     * pick a date and close calendar
     */
    function closeCalendar(value) {
        setValue(value)
        setVisible(false)
    }

    React.useEffect(() => {
        handleDateChange(name, value.toLocaleDateString())
        //eslint-disable-next-line
    }, [value])

    return (
        <div>
            <label htmlFor={id}>{content}</label>
            <input required pattern='[0-9]{2}/[0-9]{2}/[0-9]{4}' id={id} type="text" name={name} value={date} onChange={handleChange} onClick={showCalendar} className="input" />
            {visible && <Calendar onChange={closeCalendar} value={value}  />}
        </div>
    );
}

export default DatePicker;