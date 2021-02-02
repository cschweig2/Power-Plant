import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// This function stores our state.

const storeState = () => {
    let currentState = {};
    return (stateChangeFunction = state => state) => {
      const newState = stateChangeFunction(currentState);
      currentState = {...newState};
      return newState;
    }
  }

  const stateControl = storeState();
  const daisyStateControl = storeState(); // new plant: daisy
  // const playOne = storeState();

  // This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

  const changeState = (prop) => {
    return (value) => {
      return (state) => ({
        ...state,
        [prop] : (state[prop] || 0) + value
      })
    }
  }

  // We create four functions using our function factory. We could easily create many more.

  const feed = changeState("soil")(1);
  const blueFood = changeState("soil")(5);

  const water = changeState("water")(1);
  const superWater = changeState("water")(5);

  const light = changeState("light")(1);
  const superLight = changeState("light")(5);

  $(document).ready(function() {

    // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

    // regular plant state changes
      $('#feed').click(function() {
        const newState = stateControl(feed);
        $('#soil-value').text(`Soil: ${newState.soil}`);
      });

      $('#feed-blue').click(function() {
        const newState = stateControl(blueFood);
        $('#soil-value').text(`Soil: ${newState.soil}`);
      });

      $('#hydrate').click(function() {
        const newState = stateControl(water);
        $('#water-value').text(`Water: ${newState.water}`);
      });

      $('#superWater').click(function() {
        const newState = stateControl(superWater);
        $('#water-value').text(`Water: ${newState.water}`);
      });

      $('#light').click(function(){
      const newState = stateControl(light);
      $('#light-value').text(`Light: ${newState.light}`);
      });

      $('#superLight').click(function(){
      const newState = stateControl(superLight);
      $('#light-value').text(`Light: ${newState.light}`);
      });

      // Daisy state changes

      $('#feed-daisy').click(function() {
        const newState = daisyStateControl(feed);
        $('#daisy-soil-value').text(`Soil: ${newState.soil}`);
      });

      $('#feed-blue-daisy').click(function() {
        const newState = daisyStateControl(blueFood);
        $('#daisy-soil-value').text(`Soil: ${newState.soil}`);
      });

      $('#hydrate-daisy').click(function() {
        const newState = daisyStateControl(water);
        $('#daisy-water-value').text(`Water: ${newState.water}`);
      });

      $('#superWater-daisy').click(function() {
        const newState = daisyStateControl(superWater);
        $('#daisy-water-value').text(`Water: ${newState.water}`);
      });

      $('#light-daisy').click(function() {
        const newState = daisyStateControl(light);
        $('#daisy-light-value').text(`Light: ${newState.light}`);
      });

      $('#superLight-daisy').click(function() {
        const newState = daisyStateControl(superLight);
        $('#daisy-light-value').text(`Light: ${newState.light}`);
      });

        // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

      $('#show-state').click(function() {
        // We just need to call stateControl() without arguments to see our current state.
        const currentState = stateControl();
        $('#soil-value').text(`Soil: ${currentState.soil}`);
      });

      $('#show-state').click(function() {
        const currentState = stateControl();
        $('#water-value').text(`Water: ${currentState.water}`);
      });

      $('show-state').click(function() {
        const currentState = stateControl();
        $('#light-value').text(`Light: ${currentState.light}`);
      });
    });