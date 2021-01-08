import React from 'react';

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
        if (this.state.value === "Patricia") {
            alert('A name was submitted: ' + this.state.value);
        } else if (this.state.value !== "Patricia") {
            alert('Data not Found!')
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
