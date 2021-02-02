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

const changePlantState = (plant, property) => {
  return {
    ...plant,
    [property]: (plant[property] || 0) + 1
  }
}