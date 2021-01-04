import Table from "./components/Table"
import Property from "./components/Property"
import Category from "./components/Category"

function App() {
  return (
    <div className="App">
      <h2>Employee Directory</h2>
      <Category />

      <Property />

      <Table />

    </div>
  );
}

export default App;
