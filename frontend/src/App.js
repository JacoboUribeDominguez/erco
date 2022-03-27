//redux
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { 
  setCountries 
} from './redux/reducer/placesSlice';

//style
import './App.css';

//components
import Form from './components/Form';

//hooks
import useFetch from './hooks/useFetch';

function App() {

  const dispatch = useDispatch();

  const { handleFetch } = useFetch();

  useEffect(() => {
    handleCountries();
  }, [])

  const handleCountries = async() => {
    const data = await handleFetch('http://localhost:3005/countries');
    dispatch(setCountries(data));
  }

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
