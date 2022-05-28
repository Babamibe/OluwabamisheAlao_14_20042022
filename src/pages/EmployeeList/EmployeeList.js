import React from 'react';
import { Link } from 'react-router-dom';
import './EmployeeList.css'
import DataTable from 'react-data-table-component';
import { columns } from '../../data/columns';
import styled from 'styled-components'

const TextField = styled.input`
	height: 32px;
	width: 200px;
    background-color: #FAFFCD;
	border-radius: 10px;    
    border-right-width: 0px;
	border-top-right-radius: 0px;
	border-bottom-right-radius: 0px;
	border: 2px solid #000;
	padding: 0 32px 0 16px;
`;

const ClearButton = styled.button`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	height: 36px;
	width: 32px;
    background-color:blanchedalmond;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
    cursor:pointer;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <TextField
            id="search"
            type="text"
            placeholder="Search"
            aria-label="Search Input"
            value={filterText}
            onChange={onFilter}
        />
        <ClearButton type="button" onClick={onClear}>
            X
        </ClearButton>
    </>
);

function EmployeeList({employees}) {


    

    const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	const filteredItems = employees.filter(
		item => item.firstName && item.firstName.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
		);
	}, [filterText, resetPaginationToggle]);

    
 
    return (
        <>
            <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <DataTable
            pagination
            data={filteredItems}
            columns={columns}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            paginationResetDefaultPage={resetPaginationToggle}
            />
            <Link to="/">Home</Link>
            </div>
        </>
    );
}

export default EmployeeList;