import { useState } from 'react';
import './App.css';

function App() {

  const [query, setQuery] = useState('');

  const clearQuery = () => {
    setQuery('');
  }

  return (

    <div className="app">

      <h1 className="page-title"><span>SQL</span> Query Generator</h1>

      <div className="query-box">

        <span className="query" dangerouslySetInnerHTML={{__html: query || "(Blank)"}}></span>

        <button className="btn primary" onClick={clearQuery}>Clear</button>

      </div>

    </div>

  );

}

export default App;
