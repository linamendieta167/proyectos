let cad = `
<div class="logo"><img src="./img/paj.png" width="45px" alt=""></div>
    <input type="checkbox" id="toggle">
    <label for="toggle"><img class="menu" src="menu.svg" alt=""></label>
    <nav class="navigation">
      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="#tit">En vivo</a></li>
        <li><a href="#repcanciones">Predicas</a>
          
        </li>
        <li><a href="https://api.whatsapp.com/send?phone=3853132590" target="_blank">contacto</a></li>

      </ul>
    </nav>


`
document.querySelector("header").innerHTML = cad;