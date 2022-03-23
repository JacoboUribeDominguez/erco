import { useContext, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Result from './components/Result';
import { Context, ContextProvider } from './context/contex';
import useFetch from './hooks/useFetch';

function App() {

  const {
    handleFetch
  } = useFetch();

  const context = useContext(Context);

  useEffect(() => {
    handleCountries();
  }, [])

  const handleCountries = async() => {
    const data = await handleFetch('http://localhost:3005/countries');
    context.setCountries(data);
  }

  return (
    <div className="App">
      <Form />
      <Result />
    </div>
  );
}

export default App;
