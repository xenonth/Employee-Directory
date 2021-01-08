import React from 'react';


// import employee Data to be filtered
import employeeData from './EmployeeData'

class FilterForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      
      event.preventDefault();
        if (this.state.value === '' ) {
            return employeeData;
        } else if (this.state.value === employeeData.map( 
            employee => employee.name
        )) {
            let filteredEmployee= employeeData.name.filter(this.state.value)
            console.log(filteredEmployee)
            return filteredEmployee
        }
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Filter By Employee Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default FilterForm