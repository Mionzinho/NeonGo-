import React from 'react'
const { useState } = React

function Neongo (){
  
  const Container = () => {
    
  const [condition, setCondition] = useState(false)
  let random = () => Math.random() < 0.4

  const trocaCor = () => { 

    if (condition !== true){
      setCondition(random(!condition))
    } else {
      setCondition(!condition)
    }
  }

  const trocaTexto = () => {

    if (condition !== true){
      return(
        <h2>Teste sua sorte, clique no botão e descubra se ele acendera pra você</h2>
      )
     } else {
       return (
         <h2>você esta com sorte!</h2>
       )
      }
  } 

  const troca = () => {
    trocaCor()
    trocaTexto()
  }


  return (
    <div className="container">
      <h1 className={condition ? "titulo on" : "titulo off"}>Neongo</h1>
      <h2 className="subtitulo">{trocaTexto()}</h2>
      <div className="row">
        
        <div className={condition ? "box glow" : "box yellow"}></div>
        <div className={condition ? "box glow" : "box red"}></div>
      </div>
      <button
        onClick={troca}
         className={"go"}
      >
        GO
      </button>
      <div className="row">
        <div className={condition ? "box glow keepBorder" : "box orange"}></div>
        <div className={condition ? "box glow keepBorder" : "box purple"}></div>
      </div>
    </div>
  );

};

return(
  <Container/>
)
}

export default Neongo