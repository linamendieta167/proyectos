let data=[
    {
        "id":"angel_alvarez",
        "name":"Angel Alvarez",
        "audio":"./audio/angel_alvarez.mp3",
    },

    {
        "id":"apagon_mundial",
        "name":"Jorge Mendieta",
        "audio":"./audio/apagon_mundial.mp3",
    },
    {
        "id":"hno_leonardo",
        "name":"Leonardo Salvatierra",
        "audio":"./audio/hno_leonardo.mp3",
    },
    {
        "id":"jorge_mendieta",
        "name":"Jorge Mendieta",
        "audio":"./audio/jorge_mendieta.mp3",
    },
    {
        "id":"leo_salvatierra",
        "name":"Leonardo Salvatierra",
        "audio":"./audio/leo_salvatierra.mp3",
    },
    {
        "id":"pastor_sergio",
        "name":"Pastor Sergio",
        "audio":"./audio/pastor_sergio.mp3",
    },

]





let cad2=``






for(let elemento of data){
    cad2=cad2+ `

   
      <div class="cancion">
        <div class="titulo">
        <p>${elemento.name}</p>
        </div>
        <div class="play" id=${elemento.id}>
          <span class="material-icons">
            <img src="./tocar.png" width="26px" alt="">
           <!--play_circle--> 
            </span>
        </div>

        <div class="stop">

            <span class="material-icons">
            <img src="./detener.png" width="33px" alt="">
            <!--cancel-->
             </span>
        </div>
        <div class="descargar">
            <a href=${elemento.audio} download><span class="material-icons">
               <!--file_download--> 
               <img src="./descargar.png" width="25px" alt="">
               </span>
            </a>
        </div>
     </div>
    

    `
}
document.getElementById("repcanciones").innerHTML=cad2
//document.querySelector("main").innerHTML=cad