import React from 'react';

import Table from "react-bootstrap/Table"

/*The following code was copied from https://www.smashingmagazine.com/2020/03/sortable-tables-react/
The guide was read through lost my way with the code and compared the following.
*/
// function to look through and sort data 
const useSortableData = (employeeData, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedEmployeeData = React.useMemo(() => {
    let sortableEmployeeData = [...employeeData];
    //Depending on default, Ascending or Descending data     
    if (sortConfig !== null) {
      
      //Ascending Conditional
      sortableEmployeeData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }

        //Descending Conditional
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        //Default
        return 0;
      });
    }
    return sortableEmployeeData;
  }, [employeeData, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { employeeData: sortedEmployeeData, requestSort, sortConfig };
};

const EmployeeTable = (props) => {
  const { employeeData, requestSort, sortConfig } = useSortableData(props.employees);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <Table striped bordered hover variant="dark">
      <caption>Employee Directory</caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('name')}
              className={getClassNamesFor('name')}
            >
              Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('age')}
              className={getClassNamesFor('age')}
            >
              age
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('hobby')}
              className={getClassNamesFor('hobby')}
            >
              Hobby
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {employeeData.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td>{employee.hobby}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeTable;