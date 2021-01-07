import React from 'react';

import axios from 'axios';

export default class EmployeeList extends React.Component {
  state = {
    employees: []
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=10').then(res => {
      const employees = res.data.results;
      console.log(employees);
        this.setState({ employees });
      })
  }

  render() {
    return (
      <tbody>
        { this.state.employees.map(employee => 
          <tr key = {employee.login.uuid}>
          <td>{employee.name.first}</td>
          <td>{employee.name.last}</td>
          <td>{employee.email}</td>
          <td>{employee.dob.age}</td>
          </tr>
          )}
      </tbody>
    )
  }
}
