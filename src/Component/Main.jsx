import React from 'react'
import Die from './Die'
export default function Main() {
  
  const [newDice,setNewDice]=React.useState(randomNumberGeneration());
  const [tenzies,setTenzies]=React.useState(false);

  function generateDice(){
      
    return {
    value:Math.ceil(Math.random()*6),
    isHeld:false,
    id:Math.ceil(Math.random()*666666)
  }
  }
  function randomNumberGeneration(){
   
    const array=[];
    for(let i=0;i<10;i++){
      array.push(
        generateDice()
    );
    }
    return array;
  };
  
  function holdDice(id){
    setNewDice(newDice.map((item)=>(
      item.id===id ? {
        ...item,
        isHeld:!item.isHeld
      }:{...item}
    )))
  }
  
  
  // create a function to hold the dice to not roll 
  function rollDice(){
    if(!tenzies){
      setNewDice(prev=>prev.map((item)=>{
        return !item.isHeld
        ?generateDice():item
      }))

    }
    else{
      setNewDice(randomNumberGeneration())
    }
  };


  React.useEffect(()=>{
   const status=()=>{
    let val=newDice[0].value;
    let allValue=newDice.every(prev=>prev.value===val)
    let allHeld=newDice.every(prev=>prev.isHeld);
    return allHeld && allValue
   }
   setTenzies(status);
  },[newDice])
  const die_array=newDice.map((item)=>(
    <>
    <Die 
    key={item.id}
    isHeld={item.isHeld}
    value={item.value}
    onClick={()=>holdDice(item.id)}
    />
    </>
  ));

 
  return (
    <main>
        <div className='container'>
          {die_array}
          
        </div>
        <button 
        className='roll--btn'
        onClick={rollDice}
        >
          {tenzies?'New Game':
          
            "Roll"
          }
          </button>
    </main>
  )
}
