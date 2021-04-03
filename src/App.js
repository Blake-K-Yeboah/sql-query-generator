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

  const [queryOptions, setQueryOptions] = useState({});

  const typeOfQueryHandler = (type) => {
    setQueryType(type);

    switch(type) {

      case 'select':
        setQuery(`<b>SELECT</b> * <b>FROM</b> \`${tableName}\``);
        setQueryOptions({ orderBy: [false, '', ''], where: [false, '', ''], whereNot: [false, '', '']});
        break;

      default: 
        setQuery('')
    }
  }

  const checkboxHandler = e => {

    const name = e.target.name;
    const checked = e.target.checked;

    switch(name) {

      case 'orderBy': 
        setQueryOptions({ ...queryOptions, orderBy: [checked, '', '']});
        checked ? setQuery(`${query} <b>ORDER BY</b> ${queryOptions.orderBy[1]} ${queryOptions.orderBy[2]}`) : setQuery(`<b>SELECT</b> * <b>FROM</b> \`${tableName}\``);

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

        <button className="option-input-btn btn primary" onClick={() => setQuery(query.replace(/`.*`/, '`'+tableName+'`'))}>Update</button>

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

          {queryType === 'select' ? (
            <div className="option-grid">
              
              <div className="option-box">

                <h4 className="option-box-title">ORDER BY <input type="checkbox" checked={queryOptions.orderBy[0]} name="orderBy" onChange={checkboxHandler} /></h4>

                {queryOptions.orderBy[0] ? (
                  <>

                    <input className="option-input" placeholder="Field Name" onChange={e => {
                      setQueryOptions({ ...queryOptions, orderBy: [true, e.target.value, queryOptions.orderBy[2]]});
                      setQuery(`<b>SELECT</b> * <b>FROM</b> \`${tableName}\` <b>ORDER BY</b> ${queryOptions.orderBy[1]} ${queryOptions.orderBy[2]}`);
                    }} value={queryOptions.orderBy[1]} />
                    <br/><br/>
                    <button className="btn primary-outline">ASC</button>
                    <button className="btn primary-outline">DESC</button>
                  </>
                ) : ''}
              </div>

              <div className="option-box">
                <h4 className="option-box-title">WHERE</h4>
              </div>

              <div className="option-box">
                <h4 className="option-box-title">WHERE NOT</h4>
              </div>

            </div>
          ) : ''}

        </section>
      ) : ''}
      
    </div>

  );

}

export default App;
