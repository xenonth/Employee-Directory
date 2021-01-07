import Table from "react-bootstrap/Table"

const firstName = ["Patricia ", "Mikael", "Wayne", "Joaquin ", "Martine ", "Alan"]
firstName.sort()
console.log(firstName)

function EmployeeTable(props) {
  const { employees } = props;
  let sortedFirstName = [...firstName]
  sortedFirstName.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
     }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}

  return (
    <Table striped bordered hover variant="dark">
      <caption>Our Employees</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(employee => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.price}</td>
            <td>{employee.stock}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
  export default EmployeeTable;