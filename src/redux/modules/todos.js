const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";


export const addTodo = (task) => {
  return { type: ADD_TODO, payload: task }
}

export const switchState = (id) => {
  return { type: SWITCH_TODO, payload: id }
}

export const deleteTodo = (id) => {
  return { type: DELETE_TODO, payload: id }
}

const initialState = [

];


export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state = [action.payload, ...state]

    case SWITCH_TODO:
      let found = [...state].find(el => el.id === action.payload)
      found.isDone === true ? found.isDone = false : found.isDone = true;
      return [...state]

    case DELETE_TODO:
      return state.filter(el => el.id !== action.payload)
    default:
      return state
  }
}