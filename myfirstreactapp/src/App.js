//Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//My own components
import EmployeeTable from "./components/EmployeeTable"

import FilterInput from "./components/FilterInput"

import EmployeeData from "./components/EmployeeData"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
      <Container fluid>
        <Row className="justify-content-md-center">
          <h2>Employee Directory</h2>
        </Row>
        
        <Row>
          <Col xs lg="2"></Col>
          <Col xs lg="2">
            <FilterInput />
          </Col>
          <Col></Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs lg="3"></Col>
          <Col xs lg ="6">
            <EmployeeTable
              employees={EmployeeData}/>
          </Col>
          <Col xs lg="3"></Col>
        </Row>

    </Container>

    </div>
  );
}

export default App;
