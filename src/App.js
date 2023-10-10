import readXlsxFile from 'read-excel-file'
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([])
  const [loading, setloading] = useState(false)

  const handleChange = (e) => {
    setloading(true)
    readXlsxFile(e.target.files[0])
    .then((rows) => {
      setData(rows)
    })
    .catch(err => console.log(err))
    .finally(e => setloading(false))
  }

  data && console.log(data)



  useEffect(() => {
    fetch('ucpro.xlsx')
      .then(response => response.blob())
      .then(blob => readXlsxFile(blob))
      .then((rows) => {
        setData(rows);
      })
  }, [])


  return (
    <div className="App">
      Custom : <input type="file" onChange={handleChange} /> &ensp; {loading && "Loading..."} <br /><br />
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
