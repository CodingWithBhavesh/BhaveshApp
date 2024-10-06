import React, { useState } from 'react';
import './gamecss2.css'; // For animations

const DiceGame = (props) => {
  const [score, setScore] = useState(0);
  const [currentDiceFace, setCurrentDiceFace] = useState(5);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Simulate rolling effect
    setTimeout(() => {
      setCurrentDiceFace(randomNumber);
      setScore((prevScore) => prevScore + randomNumber);
      setIsRolling(false);
    }, 1000); // Duration for rolling effect
  };

  return (<>
    <div className="game-container container">
    <h1 style={{color:"   cadetblue"}}>Dice Roll Game</h1>
      {/* <div className='role-button-dice-flex'> */}

      <div className={`dice ${isRolling ? 'rolling' : ''}`}>
        <div className={`face face1 ${currentDiceFace === 1 ? 'show' : 'hide'}`}>1</div>
        <div className={`face face2 ${currentDiceFace === 2 ? 'show' : 'hide'}`}>2</div>
        <div className={`face face3 ${currentDiceFace === 3 ? 'show' : 'hide'}`}>3</div>
        <div className={`face face4 ${currentDiceFace === 4 ? 'show' : 'hide'}`}>4</div>
        <div className={`face face5 ${currentDiceFace === 5 ? 'show' : 'hide'}`}>5</div>
        <div className={`face face6 ${currentDiceFace === 6 ? 'show' : 'hide'}`}>6</div>
      </div>
     

      <div className="score-container">
        <button onClick={rollDice} className="roll-button">Roll Dice</button>
        <div className="score-pot" style={{color:"grey"}} >Score: {score}</div>

      </div>
    </div>
    </>
  );
};

export default DiceGame;
