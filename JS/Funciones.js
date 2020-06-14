function btnBuscar(){
  let details = document.getElementById("Mostrarinformacion");
  details.innerHTML=`
    <label>Ingrese el ISBN o el nombre del Manga a buscar: </label>
    <input type="text" id="valorbuscar">
    <br>
    <button id="buscar" onclick="buscar()">Buscar Manga</button>
  <button id="cancel" onclick="cancelar()">Cancelar</button>
  `;
}

function btnBuscar2(){
  let details = document.getElementById("Mostrarinformacion");
  details.innerHTML=`
  <div id="resultado"> 
    <label>Ingrese el ISBN o el nombre del Manga a buscar: </label>
    <input type="text" id="valorbuscar">
    <br>
    <button id="buscar" onclick="buscar2()">Buscar Manga</button>
    <button id="cancel" onclick="cancelar()">Cancelar</button>
  </div>
  `;
}

function btnBuscar3(){
  let details = document.getElementById("Mostrarinformacion");
  details.innerHTML=`
  <div id="resultado"> 
    <label>Ingrese el ISBN o el nombre del Manga a borrar: </label>
    <input type="text" id="valorbuscar">
    <br>
    <button id="buscar" onclick="buscar3()">Buscar Manga</button>
    <button id="cancel" onclick="cancelar()">Cancelar</button>
  </div>
  `;
}

function btnBuscarN(){
  let details = document.getElementById("Mostrarinformacion");
  details.innerHTML=`
    <div id="resultado">
    </div>
  <button id="cancel" onclick="cancelar()">Regresar</button>
  `;
}

function cancelar(){
  let details = document.getElementById("Mostrarinformacion");
  details.innerHTML=`
  <div id="datos">
    </div>
    <div id="add">
      <h1>Agregar Manga</h1>
      <label for="nombre">Nombre del manga: </label>
      <input type="text" id="addnombre">
      <br>

      <label for="descripcion">Descripcion: </label>
      <input type="text" id="adddesc">
      <br>

      <label for="autor">Autor: </label>
      <input type="text" id="addautor">
      <br>

      <label for="cantidad">Cantidad: </label>
      <input type="text" id="addcantidad">
      <br>

      <label for="precio">Precio: </label>
      <input type="text" id="addprecio">
      <br>

      <label for="isbn">ISBN: </label>
      <input type="text" id="addisbn">
      <br>
      <button id="agregar" onclick="btnAgregar2()">Añadir</button>
    </div>

    <div id="funciones">
      <button id="btnBuscar" onclick="btnBuscar()">Buscar Manga</button>
      <button id="btnModifi" onclick="btnBuscar2()">Modificar informacion de Manga almacenado</button>
      <button id="btnBorrar" onclick="btnBuscar3()">Borrar Manga</button>
    </div>
  `;
  btnDatos();
}