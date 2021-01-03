import { useState } from 'react';
import './App.css';

function App() {

  const [query, setQuery] = useState('');

  const clearQuery = () => {
    setQuery('');
    setQueryType(null);
    setTableName('');
  }

  const [queryType, setQueryType] = useState(null);

  const [tableName, setTableName] = useState('');

  const typeOfQueryHandler = (type) => {
    setQueryType(type);

    switch(type) {

      case 'select':
        setQuery(`<b>SELECT</b> * <b>FROM</b> \`${tableName}\``);
        break;

      default: 
        setQuery('')
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

        <h3 className="option-title">Table Name:</h3>

        <input type="text" value={tableName} className="option-input" onChange={e => setTableName(e.target.value)} placeholder="Enter name of SQL table:" />

        <button className="option-input-btn btn primary" onClick={typeOfQueryHandler.bind(this, queryType)}>Update</button>

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

      {queryType ? (
        <section className="specific-option-section">
          
          <h2 className="title">Specific Options ({queryType})</h2>

        </section>
      ) : ''}
      
    </div>

  );

}

export default App;
