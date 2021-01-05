import React from 'react';

import axios from 'axios';

export default class EmployeeList extends React.Component {
  state = {
    employees: []
  }

  componentDidMount() {
    axios.get('https://randomuser.me/api/').then(res => {
        const employees = res.results;
        this.setState({ employees });
      })
  }

  render() {
    return (
      <tbody>
        { this.state.employees.map(employee => 
          <tr>
          <td>{employee.name.first}</td>
          <td>{employee.name.last}</td>
          <td>{employee.email}</td>
          </tr>
          )}
      </tbody>
    )
  }
}
