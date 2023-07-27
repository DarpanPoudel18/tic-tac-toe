import React,{useState} from 'react'


const Board = () => {
const[turn,setTurn]=useState('x')
const[cells,setCells]=useState(Array(9).fill(''))
const[winMessage,setWinMessage]=useState('')


const SquareClicked=(num)=>{
  if(cells[num] !==''){
    alert('already clicked')
    return;
  }
  if(turn==='X'){
     cells[num]='X'
    setTurn('O')
  }else{
     cells[num]='O'
    setTurn('X')
  }
  setCells(cells);


  if(
  cells[0]!=='' &&
  cells[0]===cells[1]&&
  cells[1]===cells[2])
  {
    setWinMessage(cells[0])
  }
  else if(
    cells[3]!=='' &&
    cells[3]===cells[4]&&
    cells[4]===cells[5])
  {
    setWinMessage(cells[3])
  }
  else if(
    cells[6]!=='' &&
    cells[6]===cells[7]&&
    cells[7]===cells[8])
{
  setWinMessage(cells[6])
}
else if(
cells[0]!=='' &&
cells[0]===cells[3]&&
cells[3]===cells[6]
){
  setWinMessage(cells[0])
}
else if(
  cells[1]!=='' &&
  cells[1]===cells[4]&&
  cells[4]===cells[7]
  ){
    setWinMessage(cells[1])
  }
  else if(
    cells[2]!=='' &&
    cells[2]===cells[5]&&
    cells[5]===cells[8]
    ){
      setWinMessage(cells[2])
    }

    else if(
      cells[0]!=='' &&
      cells[0]===cells[4]&&
      cells[4]===cells[8]
      ){
        setWinMessage(cells[0])
      }
 
      else if(
        cells[2]!=='' &&
        cells[2]===cells[4]&&
        cells[4]===cells[6]
        ){
          setWinMessage(cells[2])
        }
}

const Restart=()=>{
  setWinMessage('');
  setCells(Array(9).fill(''));
}
     

const Cell = ({num}) => {
        return  <td className="cell" onClick={()=>SquareClicked(num)}>{cells[num]}</td> 
    }
  
    return (
        <div className="container">
            <table>
                
                <tbody>
                    <tr>
                   <Cell num={0}/>
                   <Cell num={1} />
                   <Cell num={2}/>
                    </tr>
                    <tr>
                   <Cell num={3}/>
                   <Cell num={4}/>
                   <Cell num={5}/>
                    </tr>
                    <tr>
                   <Cell num={6}/>
                   <Cell num={7}/>
                   <Cell num={8}/>
                    </tr>
                </tbody>
            </table>
            {winMessage &&
              <div>
              <p className="win-text">la congrats mero bhai. '{winMessage}' </p>
              <button className="btn" onClick={Restart}>Wanna play again,Feri khelne?</button>
              </div>
            }
            <div className="clear">
            <button className="btn" onClick={()=>  setCells(Array(9).fill(''))}>Clear</button>
            </div>
        </div>
    )
    }



export default Board
