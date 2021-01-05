import Table from "react-bootstrap/Table"

import TableHead from './TableHead'


function EmployeeTable(employeeData) {
    return (
      <div>
          <h2>TABLE</h2>
          <Table striped bordered hover variant="dark">
            <TableHead />
          </Table>
      </div>
    )
  }
  
  export default EmployeeTable;