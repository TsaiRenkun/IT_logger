import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_LOGS,
  CLEAR_CURRENT,
} from "./types";

//use thunk to export a function
// export const getLogs = () => {
//   return async(dispatch) => {
//     setLoading();
//     const res = await fetch('/logs');
//     const data = await res.json();

//     dispatch({
//         type:GET_LOGS,
//         payload:data
//     });
//   };
// };

//Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/logs");
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/logs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(`/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application-json",
      },
    });

    const data = await res.json

    dispatch({
      type: DELETE_LOG,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.data,
    });
  }
};
//Set current
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//clear Current
export const clearCurrent = () => {
  return {
    type: CLEAR_LOGS,
  };
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
