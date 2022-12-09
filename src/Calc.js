import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  label: {
    fontSize: "18px",
    textAlign: "center",
    width: "200px",
    marginBottom: "8px"
  },
  input: {
    fontSize: "18px",
    textAlign: "center",
    width: "100px",
    marginBottom: "8px"
  },
  result: {
    width: "75%",
    height: "200px",
    background: "white",
    // margin: "30px",
    color: "black",
    display: "flex",
    flexDirection: "column",
 
  },
  labelDescription: {
    fontSize: "12px",
    textAlign: "center",
    width: "75vh",
    marginBottom: "12px",
    color: "white"
  }
});

export const Calc = () => {
  const classes = useStyles();
  const [mpg, setMpg] = useState(30);
  const [distance, setDistance] = useState(70);
  const [fuelPrice, setFuelPrice] = useState(1.65);

  function getMpg(e) {
    setMpg(e.target.value);
    console.log(mpg);
  }

  function getDistance(e) {
    setDistance(e.target.value);
    console.log(distance);
  }

  function getFuelPrice(e) {
    setFuelPrice(e.target.value);
    console.log(fuelPrice);
  }

  const litreToGallon = fuelPrice * 4.55;


  //STILL USING OLD STATE!?!?
  function CalcFuelCost() {
    const fuelCost = (Math.round(distance / mpg) * litreToGallon).toFixed(2);
    console.log(fuelCost);

    return fuelCost;
  }

  return (
    <React.Fragment>
      <label className={classes.label}>What is the mpg</label>
      <label className={classes.labelDescription}>This can be found on the dash, or by googling it? if not,, guess?</label>
      <input
        className={classes.input}
        type="number"
        onChange={getMpg}
        placeholder={mpg}
      />
      <label className={classes.label}>How far are you going? (miles)</label>
      <label className={classes.labelDescription}>Allow a few more miles, just in case?!?</label>
      <input
        className={classes.input}
        type="number"
        onChange={getDistance}
        placeholder={distance}
      />
      <label className={classes.label}>
        How much does the fuel cost (per Litre)
      </label>
      <input
        className={classes.input}
        type="number"
        onChange={getFuelPrice}
        placeholder={fuelPrice}
      />
      {/* <p> if the car does {mpg} miles to the gallon,</p>
      <p> you want to go {distance} miles</p>
      <p> and Fuel is £{fuelPrice} per litre.</p>
      <p> at around {mpg}mpg</p> */}
      <div className={classes.result}>
        You will need around{" "}
        <div style={{ fontSize: "35px", paddingTop: "20%" }}>
          £{CalcFuelCost()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Calc;

//NEED TO STYLE IT BETTER!
