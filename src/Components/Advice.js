import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Advice() {
  const [amount, setAmount] = useState(0);
  const [advices, setAdvices] = useState([
    "Don't give to others advice which you wouldn't follow.",
    "To cleanly remove the seed from an Avocado, lay a knife firmly across it, and twist",
    "A long walk alone with some time to think, can work wonders",
  ]);
  const inputChange = (e) => {
    console.log(e.target.value);
    setAmount(e.target.value);
  };
  const listAdvices = () => {
   return advices.map((elm) =><li className="list-group-item">{elm}</li>);
  };
  return (
    <div>
      <h1>Advice Book</h1>
      <div style={{display:'flex'}}>
        <div className="col-md-4">
          <p>Please enter advice number between 5-20</p>
          <input
            className="form-control"
            type="number"
            onChange={(e) => inputChange(e)}
          />
          <Button variant="success">Get Advices</Button>
        </div>
        <div className="col-md-8">
          <ul className="list-group">{listAdvices()}</ul>
        </div>
      </div>
    </div>
  );
}

export default Advice;
