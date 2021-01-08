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
        <Row className="justify-content-md-center">
          <h2>Employee Directory</h2>
        </Row>

        <Row className="justify-content-md-center">
          <Col xs lg="3"></Col>
          <Col xs lg ="6">
            <EmployeeTable
              employees={[
                { id: 1, name: 'Patricia Millstein', age: 49, hobby: "Shadow Magic" },
                { id: 2, name: 'Gaius Worzel', age: 19, hobby: "Horseback Riding" },
                { id: 3, name: 'Charlie McBurn', age: 24, hobby: "Pyromanic" },
                { id: 4, name: 'Dean Tsunatra', age: 42, hobby: "Singing" },
                { id: 5, name: 'Bruce Constinata', age: 63, hobby: "Volunteering" },
                { id: 6, name: 'Dina Beatrice', age: 45, hobby: "Painting" },
                { id: 7, name: 'Hugo Belllingie', age: 99, hobby: "Investing" },
            ]}/>
          </Col>
          <Col xs lg="3"></Col>
        </Row>

    </Container>

    </div>
  );
}

export default App;
