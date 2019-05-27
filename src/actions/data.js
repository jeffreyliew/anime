import { DAY, URL } from "../utils";

export const RECEIVE_DATA = "RECEIVE_DATA";

function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data
  };
}

export function handleInitialData() {
  return async dispatch => {
    let index = 0;
    let data = [];
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: { accept: "application/json" }
      });
      const result = await response.json();

      for (let i = 0; i < 7; i++) {
        data = data.concat(result[DAY[index]]);
        index++;
      }
      dispatch(receiveData(data));
    } catch (err) {
      console.log(`Error: ${err}`);
      alert(`Error: ${err}`);
    }
  };
}
