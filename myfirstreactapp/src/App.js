//Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//My own components
import EmployeeTable from "./components/EmployeeTable"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
      <Container fluid>
      <h2>Employee Directory</h2>

        <Row className="justify-content-md-center">
          <EmployeeTable />
        </Row>

    </Container>

    </div>
  );
}

export default App;
