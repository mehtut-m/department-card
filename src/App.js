import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/DepartmentCard/Card';

function App() {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    axios
      .get('https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json')
      .then((res) => setDepartments(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <div className="card-container">
        {departments.map((item) => (
          <Card key={item.id} cardItem={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
