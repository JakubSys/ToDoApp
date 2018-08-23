function generateID(list) {
  if (list.length) {
    return Math.max.apply(Math, list.map(item => item.itemId)) + 1;
  }
  return 1;
}

export function setItems(data = [], type = "SET_ITEMS") {
  return (dispatch, getState) => {
    if (data.length) {
      dispatch({ type, data });
      dispatch(saveDataInLocalStorage());
    } else {
      if (window.localStorage && window.localStorage.react_todo_list_items) {
        dispatch({
          type,
          data: JSON.parse(window.localStorage.react_todo_list_items)
        });
      }
    }
  };
}

function saveDataInLocalStorage() {
  return (dispatch, getState) => {
    if (window.localStorage) {
      window.localStorage.setItem(
        "react_todo_list_items",
        JSON.stringify(getState().todo.list)
      );
    }
    return;
  };
}

export function addItem(data, history) {
  return (dispatch, getState) => {
    dispatch({
      type: "ADD_ITEM",
      data: {
        itemId: generateID(getState().todo.list),
        message: data.message,
        isCompleted: data.isCompleted
      }
    });
    history.push("/");
    dispatch(saveDataInLocalStorage());
  };
}

function updateItem(data) {
  return dispatch => {
    dispatch({ type: "UPDATE_ITEM", data });
    dispatch(saveDataInLocalStorage());
  };
}

export function updateMessage(data, history) {
  return dispatch => {
    dispatch(updateItem(data));
    history.push("/");
  };
}

export function toggleComplete(data) {
  return dispatch => {
    dispatch(
      updateItem({
        itemId: data.itemId,
        message: data.message,
        isCompleted: !data.isCompleted
      })
    );
  };
}

export function removeItem(itemId) {
  return (dispatch, getState) => {
    dispatch({ type: "REMOVE_ITEM", data: itemId });
    dispatch(saveDataInLocalStorage());
  };
}
