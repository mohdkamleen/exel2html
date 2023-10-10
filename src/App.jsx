import './App.css';
import { useState } from 'react';

function App() {

  const [screen, setscreen] = useState("af")
  const [data, setData] = useState({
    af: "",
    trf: "",
    tfbr: "",
    rsg: ""
  })

  return (
    <div className="App" style={{ margin: "20px 5%" }}>

      {screen === "af" && (
        <>
          <label>
            ARRIVAL FUEL (KG) : <br />
            <input
              type="number"
              value={data.af}
              onChange={(e) => setData({ ...data, af: e.target.value })}
              placeholder='eg. 45' />
          </label> <br />
          <button onClick={() => !data.af ? alert("Required.") : setscreen("trf")}>Next</button>
        </>)}

      {screen === "trf" && <div className="trf">
        <label>
          TOTAL REQUIRED FUEL (KG) : <br />
          <input
            type="number"
            value={data.trf}
            onChange={(e) => setData({ ...data, trf: e.target.value })}
            placeholder='eg. 12' />
        </label> <br />
        <button onClick={() => setscreen("af")}>Previous</button>&ensp;
        <button onClick={() => !data.trf ? alert("Required.") : setscreen("tfbr")}>Next</button>
      </div>}

      {screen === "tfbr" && (
        <>
          <label>
            FUEL FIGURE BEFORE REFUELING (KG) : <br />
            <input
              type="number"
              value={data.tfbr}
              onChange={(e) => setData({ ...data, tfbr: e.target.value })}
              placeholder='eg. 12' />
          </label> <br />
          <button onClick={() => setscreen("trf")}>Previous</button>&ensp;
          <button onClick={() => !data.tfbr ? alert("Required.") : setscreen("rsg")}>Next</button>
        </>)}

      {screen === "rsg" && (
        <>
          <label>
            REFUELING SPECIFIC GRAVITY (S.G) : <br />
            <input
              type="number"
              value={data.rsg}
              onChange={(e) => setData({ ...data, rsg: e.target.value })}
              placeholder='eg. 12' />
          </label> <br />
          <button onClick={() => setscreen("tfbr")}>Previous</button>&ensp;
          <button onClick={() => !data.rsg ? alert("Required.") : setscreen("report")}>Next</button>
        </>)}

      {screen === "report" && (
        <>
          <h3>Rreport </h3>
          <p>CONVERSION FACTOR : <b>1</b></p>
          <p>METERED UPLIFT (LTS) : <b>0</b></p>
          <p>CALCULATED UPLIFT (LTS) : <b>{
            (data.trf - data.tfbr) * 1
          }</b></p>
          <p>TOTAL FUEL ON BOARED (KGS) : <b>0</b></p>
          <p>DISCREPANCY : <b>{
            0 - ((data.trf - data.tfbr) * 1)
          }</b></p> <br />
        </>)}

    </div>
  );
}

export default App;
