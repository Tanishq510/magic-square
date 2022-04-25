import React, { useEffect } from 'react';
import './style.css';

export default function App() {
  let grids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let magicMaps = [2,9,4,7,5,3,6,1,8]
  //
  useEffect(() => {
    createMagicBox()
  }, []);
  const createMagicBox=()=>{
    magicMaps.map((magicMap,index)=>{
      let element = document.getElementById(`${magicMap}`)
      element.innerHTML = index+1
    })
  }
  return (
    <div className="game-board">
      {grids.map((grid, index) => {
        return <div id={grid} key={index} className="box">{grid}</div>;
      })}
    </div>
  );
}
