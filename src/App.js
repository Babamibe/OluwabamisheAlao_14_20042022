import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import EmployeeList from './pages/EmployeeList/EmployeeList';
import Home from './pages/Home/Home';
import { mockUsers } from './data/mockUsers';

function App() {
  const [employees, setEmployee] = React.useState(mockUsers)
  function addNewEmployee(newEmployee) {
    setEmployee([...employees, newEmployee])
  }
  console.log('Employee List', employees)
  console.log('local storage', localStorage)
  console.log("mock", mockUsers)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home handleNewEmployee={addNewEmployee}/>} />
        <Route path='/employee-list' element={<EmployeeList employees={employees} newEmployee={setEmployee}/>} />
      </Routes>
      
    </div>
  );
}

export default App;
