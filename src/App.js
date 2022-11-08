import React, { useState } from "react";
import useCounter from "./hooks/useCounter";
import "./App.css";

function App() {
  const [value, action] = useCounter(),
    [error, setError] = useState("");

  return (
    <>
      <div className="counter-container card">
        <div className="info">
          <p className="altschool">Alt school Project</p>
          <p>By: Mfon Ekwere</p>
        </div>

        {error !== "" ? (
          <div className="error">
            <p>{error}</p>
          </div>
        ) : null}

        <div className="counter">
          <button
            className="counter-btn decrement-button"
            onClick={() => {
              parseInt(value) === 0
                ? setError("404 error count is less than zero")
                : action({ type: "subtract" });
            }}
          >
            -
          </button>

          <input
            type="number"
            className="counter-value"
            value={value}
            onChange={(e) => {
              // e.persit();
              var newValue = "0";

              parseInt(value) === 0
                ? (newValue = e.target.value
                    .toString()
                    .slice(e.target.value.toString().length - 1))
                : (newValue = e.target.value);

              action({
                type: "setValue",
                payload: newValue === "" ? "0" : newValue,
              });
            }}
          />

          <button
            className="counter-btn increment-button"
            onClick={() => {
              setError("");

              action({ type: "add" });
            }}
          >
            +
          </button>
        </div>

        <div className="counter-actions">
          <button
            className="counter-action-btn reset-btn"
            onClick={() => {
              action({ type: "reset" });
            }}
          >
            Reset
          </button>
        </div>
        <p className="note">
          {" "}
          <span>Note</span> : When the count is less than zero an error appears.
        </p>
      </div>
    </>
  );
}

export default App;
