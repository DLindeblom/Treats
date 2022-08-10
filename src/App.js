import './App.css';
import { React, useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  // function that returns a random number between a min and max
  function getRandomNumber(min, max) {

    return Math.random() * (max - min) + min;

  }

  const moveButton = () => {
    // collect all the divs
    let divs = document.getElementsByTagName('div');
    // get window width and height
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;

    for (let i = 0; i < divs.length; i++) {

      // shortcut! the current div in the list
      let thisDiv = divs[i];

      // get random numbers for each element
      let randomTop = getRandomNumber(0, winHeight);
      let randomLeft = getRandomNumber(0, winWidth);

      // update top and left position
      thisDiv.style.top = randomTop + "px";
      thisDiv.style.left = randomLeft + "px";

    }

  };

  const randomInterval = () => {

    let num = Math.floor(Math.random() * 10000) + 1000;

    return num;
  };

  let treatCount;




  const [hidden, setHidden] = useState(false);
  const [treats, setTreats] = useState(0);

  const useHideButton = () => {

    // setTreats(treats + 1);

    axios.get('users/treats/1')

    axios.get('/users/1').then((res) => {
      
      console.log(res.data[0].treats)
      setTreats(res.data[0].treats + 1)
    });


    moveButton();
    setHidden(true);

    const timer = setTimeout(() => {
      setHidden(false);
    }, randomInterval());

    return () => clearTimeout(timer);

  };
  return (
    <>
      {!hidden && <button onClick={useHideButton}>I'm a treat!</button>}
    </>
  );
}

export default App;
