import { useState } from 'react';
import './App.css';

function App() {

  const [query, setQuery] = useState('');

  const clearQuery = () => {
    setQuery('');
  }

  const [queryType, setQueryType] = useState(null);

  const typeOfQueryHandler = (type) => {
    setQueryType(type);

    switch(type) {
      case 'select':
        setQuery("<b>SELECT</b> * <b>FROM</b> `table_name`");
    }
  }

  return (

    <div className="app">

      <h1 className="page-title"><span>SQL</span> Query Generator</h1>

      <section className="query-box">

        <span className="query" dangerouslySetInnerHTML={{__html: query || "<i>Blank</i>"}}></span>

        <button className="btn primary" onClick={clearQuery}>Clear</button>

      </section>

      <section className="option-selector">

        <h3 className="option-title">Type of query: </h3>

        <section className="option-btn-group">

          <button className={`btn ${queryType === 'select' ? 'primary' : 'primary-outline'}`} onClick={typeOfQueryHandler.bind(this, 'select')}>
            SELECT
          </button>

          <button className={`btn ${queryType === 'delete' ? 'primary' : 'primary-outline'}`} onClick={typeOfQueryHandler.bind(this, 'delete')}>
            DELETE
          </button>

        </section>

      </section>

    </div>

  );

}

export default App;
