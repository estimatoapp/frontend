import './App.css';
import { useQuery } from '@tanstack/react-query';

function App() {
  const query = useQuery(['helloWorld'], async () => {
    const response = await fetch('http://localhost:3001')
    const data = await response.json()
    return data
  })

  return (
    <p>{query?.data?.hello}</p>
  );
}

export default App;
