import './App.css'
import Countries from './components/Countries';

function App() {

  // Fetch the acountry api, and parse JSON
  const countriesPromise = fetch("https://restcountries.com/v3.1/all")
  .then(      (res) => res.json()  );


  return (
      <>
          <Countries countriesPromise={countriesPromise}></Countries>
      </>
  );
}

export default App
