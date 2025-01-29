import React, { useEffect, useState } from 'react'
import Block from './Block'
import './app.css';


const App = () => {
const [state ,setstate] =useState(Array(9).fill(null))
const [currentIndex , setcurrentIndex] = useState('x');
const [winner, setWinner] = useState(null);


const checkWin = () => {

  
  let winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let i = 0; i < winPatterns.length; i++) {
    const [a, b, c] = winPatterns[i];
    if (state[a] && state[a] === state[b] && state[a] === state[c]) {
      return state[a];  
    }
  }
  return null; 
};


// useEffect(() => {
//   const winner = checkWin();
//   setWinner(winner)
//   if (winner) {
//     setTimeout(() => {
//       alert(`${winner} won the game!`);
//       setstate(Array(9).fill(null));
//       setcurrentIndex('x');
//     }, 100); 
//   }
// }, [state ]);


useEffect(()=>{
  const winner = checkWin();
  if(winner){
  setWinner(winner)
  }

},[state])

 
const onclickHandle = (index)=>{
  
  if (state[index] !== null || winner) return; 

  let copyArray = [...state]; 
  copyArray[index] = currentIndex; 
 
  setstate(copyArray)
  setcurrentIndex(currentIndex === 'x' ? '0' : 'x');
  
  
}

const resetGame = () => {
  setstate(Array(9).fill(null));
  setcurrentIndex('x');
  setWinner(null);
};

  return (
    <div className="game-container">
      <h3>Tic Tac Toe Game</h3>

      {winner && <p className="winner-text">{winner} won the game!</p>}

      <div className="board">
        <div className="row">
          <Block blockClick={() => onclickHandle(0)} value={state[0]} />
          <Block blockClick={() => onclickHandle(1)} value={state[1]} />
          <Block blockClick={() => onclickHandle(2)} value={state[2]} />
        </div>
        <div className="row">
          <Block blockClick={() => onclickHandle(3)} value={state[3]} />
          <Block blockClick={() => onclickHandle(4)} value={state[4]} />
          <Block blockClick={() => onclickHandle(5)} value={state[5]} />
        </div>
        <div className="row">
          <Block blockClick={() => onclickHandle(6)} value={state[6]} />
          <Block blockClick={() => onclickHandle(7)} value={state[7]} />
          <Block blockClick={() => onclickHandle(8)} value={state[8]} />
        </div>
      </div>

       <button className="play-again" onClick={resetGame}>Play Again</button>
    </div>
  )
}

export default App