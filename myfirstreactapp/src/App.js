//Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//My own components
import EmployeeTable from "./components/EmployeeTable"
import Property from "./components/Property"
import Category from "./components/Category"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
      <Container fluid>
      <h2>Employee Directory</h2>
        <Row className="justify-content-md-center">

          <Col xs lg="4">

            <Category />
          
          </Col>
          <Col xs lg ="1"></Col>
        
          <Col xs lg="4">
            <Property />
          </Col>
          
        </Row>

        <Row className="justify-content-md-center">
          <EmployeeTable />
        </Row>

    </Container>

    </div>
  );
}

export default App;
