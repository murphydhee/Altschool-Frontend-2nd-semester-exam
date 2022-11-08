import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    // Add case
    case "add":
      return parseInt(state) + 1;

    //   Subtract case

    case "subtract":
      return parseInt(state) === 0 ? state : parseInt(state) - 1;

    //   Reset case

    case "reset":
      return 0;

    //   Set value

    case "setValue":
      return action.payload ? action.payload : state;

    default:
      return state;
  }
}

const useCounter = () => {
  const [counterValue, dispatch] = useReducer(reducer, 0);

  return [counterValue, dispatch];
};

export default useCounter;
