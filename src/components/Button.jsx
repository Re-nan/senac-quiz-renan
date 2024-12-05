import React from 'react';

const Button = () => {
    const [mensagem, setMensagem] = React.useState("");
        
    const handleClick = () => {
    const checkBoxstatus = document.getElementById("CheckAlternativa2");    
    const respostaAlternativa = document.getElementById("alternativa2").textContent;
    
        if(checkBoxstatus.checked){
            alert("*** Parabens ***\n\nAlternativa correta: " + respostaAlternativa)
            
        }else{
            alert("Alternativa Incorreta")
        }
    }

  return (
    <button onClick={handleClick}>
      Responder 
    </button>
    
  );
};

export default Button;