import React from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import './EmployeeList.css'
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

const customStyles = {
    subHeader: {
        style: {
            backgroundColor: "#CDFAFF", 
            marginBottom: "20px"
        }
    },
    headCells: {
        style: {
            backgroundColor: "#CDFAFF",
            filter: 'brightness(60%)',
            fontWeight: "bold",
            fontSize: "18px"
        }
    },
    rows: {
        style: {
            backgroundColor: "#CDFAFF",
            fontSize: "16px"
        }
    },
    pagination: {
        style: {
            backgroundColor: "#CDFAFF"
        }
    },
    noData: {
        style: {
            backgroundColor: "#CDFAFF"
        }
    }
}

function EmployeeList({employees}) {    

    const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

    //search function according to search input        
	function search(rows) {
        const columns = rows[0] && Object.keys(rows[0])
        return rows.filter(
            (row) => 
                columns.some(
                    (column) => row[column].toString().toLowerCase().indexOf(filterText.toLowerCase()) > -1
                )
            )
    }

    //handle when clear button clicked
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
            <DataTable
            pagination
            data={search(employees)}
            columns={columns}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            paginationResetDefaultPage={resetPaginationToggle}
            striped={true}
            highlightOnHover={true}
            customStyles={customStyles}
            />
            <Link className='link' to="/">Home</Link>
            </div>
        </>
    );
}

export default EmployeeList;