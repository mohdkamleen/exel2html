import readXlsxFile from 'read-excel-file'
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [data, setData] = useState([])
 
  const handleChange = (e) => {
    setData([])
    readXlsxFile(e.target.files[0]).then((rows) => {
      setData(rows)
    })
  }

  fetch('ucpro.xlsx')
    .then(response => response.blob())
    .then(blob => readXlsxFile(blob))
    .then((rows) => {
      setData(rows);
    })

  return (
    <div className="App">
      <input type="file" onChange={handleChange} /> <br /><br />
      <table border={1} cellSpacing="0">
        {
          data && data.map((blob, i) => (
            <tr key={i}>
              {
                blob.map((row, j) => <td>{row} &ensp;</td>)
              }
            </tr>
          ))
        }
      </table>
    </div>
  );
}

export default App;
