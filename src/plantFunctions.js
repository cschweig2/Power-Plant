// export const hydrate = (plant) => {
//   return {
//     ...plant,
//     hydrate: (plant.water || 0) + 1
//   }
// };

// export const feed = (plant) => {
//   return {
//     ...plant,
//     feed: (plant.feed || 0) + 1
//   }
// };

// export const light = (plant) => {
//   return {
//     ...plant,
//     light: (plant.light || 0) + 1
//   }
// };

// const changePlantState = (plant, property) => {
//   return {
//     ...plant,
//     [property]: (plant[property] || 0) + 1
//   }
// }

// const changeState = (state, prop, value) => ({
//     ...state,
//     [prop]: (state[prop] || 0) + value
// })

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    })
  }
}

const storeState = () => { //no argument, only stores current state of project
  let currentState = {}; // stores current state; will mutate each time hence let
  return (stateChangeFunctio = state => state) => {  //anonymous inner fxn that takes a fxn as an argument
    const newState = stateChangeFunction(currentState);
    currentState = {...newState}; // currentstate copy of newState
    return newState; 
  }
}

const stateControl = storeState();


const blueFood = changeState("soil")(5)
const greenFood = changeState("soil")(10)
const yuckyFood = changeState("soil")(-5)

const fedPlant = stateControl(blueFood);

const plantFedAgain = stateControl(greenFood);