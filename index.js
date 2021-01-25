import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style.css";

const header = document.getElementById("header");
const root = document.getElementById("root");
const rootTwo = document.getElementById("rootTwo");
const footer = document.getElementById("footer");

const Greet = () => {
  return (
    <h1>Financial Calculator</h1>,
    <h2>Making financial calculation easy and fast!!</h2>
  );
};
const greet = <Greet />;
ReactDOM.render(greet, header);

function AddForm() {
  const [present, setPres] = useState(1000);
  const [discount, setDis] = useState(0);
  const [period, setPer] = useState(0);
  const [future, setFut] = useState(0);

  function handleChange(e) {
    setDis(e.target.value);
  }

  function handleChangeTwo(e) {
    setPer(e.target.value);
  }

  function handleChangeThree(e) {
    setPres(e.target.value);
  }

  function handleSubmit(e) {
    setFut((present * (1 + Number(discount)) ** period).toFixed(0));
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Present Value: </label>
      <br />
      <input type="number" value={present} onChange={handleChangeThree} />
      <br />
      <label>Discount: </label>
      <br />
      <input type="float" value={discount} onChange={handleChange} />
      <br />
      <label>Number of Period: </label>
      <br />
      <input type="number" value={period} onChange={handleChangeTwo} />
      <br />
      <input type="submit" value="Calculate" />
      <p>
        {" "}
        Future value in {period} years is: <strong>{future} TRY</strong>{" "}
      </p>
    </form>
  );
}

const form = <AddForm />;
ReactDOM.render(form, rootTwo);

const Trademark = () => {
  return (
    <p>
      <em>Made by Canakin</em>
    </p>
  );
};
ReactDOM.render(<Trademark />, footer);

const assets = ["Equity", "FX Rates", "Bond", "Gold"];
function Mylist(props) {
  const arr = props.data;
  const items = arr.map((value) => <p>{value}</p>);
  return <div>{items}</div>;
}
ReactDOM.render(<Mylist data={assets}/>, document.getElementById("rootThree"));
