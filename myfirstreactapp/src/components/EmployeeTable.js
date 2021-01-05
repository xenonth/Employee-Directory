import Table from "react-bootstrap/Table"

import TableHead from './TableHead'
import EmployeeList from './TableLine'


function EmployeeTable() {
    return (
      <div>
          <h2>TABLE</h2>
          <Table striped bordered hover variant="dark">
            <TableHead />
            <EmployeeList />
          </Table>
      </div>
    )
  }
  
  export default EmployeeTable;