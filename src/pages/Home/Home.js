import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import ModalComponent from '../../components/ModalComponent/ModalComponent';

function Home({handleNewEmployee}) {
    const [isVisible, setIsVisible] = React.useState(false)
    return (
        <>
            <div className='title'>
                <h1>HRnet</h1>
            </div>
            <div className='container'>
                <Link to='/employee-list'>View Current Employees</Link>
                <h2>Create Employee</h2>
                <Form handleNewEmployee={handleNewEmployee} setIsVisible={setIsVisible}/>
                <ModalComponent isVisible={isVisible} setIsVisible={setIsVisible}/>
            </div>
        </>
    );
}

export default Home;