import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';


function App() {
 
  const [linea1,setLinea1] = useState('')
  const [linea2,setLinea2] = useState('')
  const [imagen,setImagen] = useState('')

  const onChangeLinea1 =  function(evento){
    setLinea1(evento.target.value)
  }
  const onChangeLinea2 =  function(evento){
    setLinea2(evento.target.value)
  }
  const onChangeImagen =  function(evento){
    setImagen(evento.target.value)
  }
  const onClickExportar = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => { /*funcion para exportar*/
    var img    = canvas.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = img;
    link.click();
    
      document.body.appendChild()
  });
  }

  
  return (
    <div className="App">
     <select onChange={onChangeImagen}>
       <option value="futurama">Futurama</option>
       <option value="juegocalamar">Juego calamar</option>
       <option value="nenallamas">Nena en llamas</option>
       <option value="gato">Gato</option>
     </select><br/>
     
      <input onChange= {onChangeLinea1} type="text" placeholder='Linea 1' /><br/ >
      <input onChange= {onChangeLinea2} type="text" placeholder='Linea 2' /><br/ >
      <button onClick= {onClickExportar}>Exportar</button>

      <div className="meme" id="meme">
        <span>{linea1}</span>
        <span>{linea2}</span>
        <img src={"/images/"+ imagen+ ".jpg"} />
      </div>
      
    </div>
  );
}

export default App;
