import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';

const quiz = {
  pergunta: "Qual alternativa corresponde a um framkework Front End?",
  alternativa: ['Java', 'React', 'HTML', 'Python', 'Typescript'],
  alternativaCorreta: 'react'
}

const imgcss = {
  width: '100px'
}

function App() {

  return (
  <>
  <Header></Header>


    <div>
      <p>Pergunta: {quiz.pergunta}</p>
      <p>
        <input type='radio' name='quiz' ></input>
        <p id="alternativa1"> {quiz.alternativa[0]}<img src='src/assets/tema1/images/img1.jpg' style={imgcss}></img></p>
      </p>

      <p>
        <input id="CheckAlternativa2" type='radio' name='quiz'></input>
        <p id="alternativa2">{quiz.alternativa[1]} <img src='src/assets/tema1/images/img2.jpg' style={imgcss}></img></p>
      </p>

      <p>
        <input type='radio' name='quiz' ></input>
        <p id="alternativa3">{quiz.alternativa[2]} <img src='src/assets/tema1/images/img3.jpg' style={imgcss}></img></p>
      </p>

      <p>
        <input type='radio' name='quiz'></input>
        <p id="alternativa4">{quiz.alternativa[3]} <img src='src/assets/tema1/images/img4.jpg' style={imgcss}></img></p>
      </p>
    
      <Button></Button>
    <Footer></Footer>
    </div>
  </>
  
    

  )
}

export default App
