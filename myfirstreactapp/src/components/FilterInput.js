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
        if (this.state.value === '') {
            return employeeData;

        } else if(Number(this.state.value) === 1) {
           //DataFiltering
           let filteredData = employeeData.find(employee => employee.id === 1)
           console.log(filteredData)
           alert(`${filteredData.name} is an employee at this firm and is favourite Hobby is ${filteredData.hobby}`)        
        
        }   else if(Number(this.state.value) === 2) {
            //DataFiltering
            let filteredData = employeeData.find(employee => employee.id === 2)
            console.log(filteredData)
            alert(`${filteredData.name} is an employee at this firm and their favourite Hobby is ${filteredData.hobby}`)

         } else if(Number(this.state.value) === 3) {
            //DataFiltering
            let filteredData = employeeData.find(employee => employee.id === 3)
            console.log(filteredData)
            alert(`${filteredData.name} is an employee at this firm and their favourite Hobby is ${filteredData.hobby}`)        
         } else if(Number(this.state.value) === 4) {
            //DataFiltering
            let filteredData = employeeData.find(employee => employee.id === 4)
            console.log(filteredData)
            alert(`${filteredData.name} is an employee at this firm and their favourite Hobby is ${filteredData.hobby}`)        
         } else if(Number(this.state.value) === 5) {
            //DataFiltering
            let filteredData = employeeData.find(employee => employee.id === 5)
            console.log(filteredData)
            alert(`${filteredData.name} is an employee at this firm and their favourite Hobby is ${filteredData.hobby}`) 
        } else if(Number(this.state.value) === 6) {
            //DataFiltering
            let filteredData = employeeData.find(employee => employee.id === 6)
            console.log(filteredData)
            alert(`${filteredData.name} is an employee at this firm and their favourite Hobby is ${filteredData.hobby}`) 
        }   else if(Number(this.state.value) === 7) {
            //DataFiltering
            let filteredData = employeeData.find(employee => employee.id === 7)
            console.log(filteredData)
            alert(`${filteredData.name} is an employee at this firm and their favourite Hobby is ${filteredData.hobby}`) 
        }
    }   
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Filter By Employee Id:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default FilterForm