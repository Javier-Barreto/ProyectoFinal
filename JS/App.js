function btnAgregar2(){
  let nombre = document.getElementById("addnombre").value;
  let autor = document.getElementById("addautor").value;
  let descripcion = document.getElementById("adddesc").value;
  let cantidad = parseInt(document.getElementById("addcantidad").value);
  let precio = parseInt(document.getElementById("addprecio").value);
  let isbn = document.getElementById("addisbn").value;

 if(nombre==""||autor==""||descripcion==""||cantidad==""||precio==""||isbn=="")
 {
   alert("faltan datos");
 }
 else
 {
  var xhr = new XMLHttpRequest();
  xhr.open("POST","http://localhost:3000/Almacen",true);
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  alert("Dato agregado correctamente");
  document.getElementById("addnombre").value="";
  document.getElementById("addautor").value="";
  document.getElementById("adddesc").value="";
  document.getElementById("addcantidad").value="";
  document.getElementById("addprecio").value="";
  document.getElementById("addisbn").value="";
  xhr.send("nombre="+nombre+"&descripcion="+descripcion+"&autor="+autor+"&cantidad="+cantidad+"&precio="+precio+"&isbn="+isbn);
  btnDatos();
 }
}



function btnDatos()
{
  var request = new XMLHttpRequest();
  request.open("GET","http://localhost:3000/Mangas",true);
  request.onload = function(){
    let details = document.getElementById("datos");
    let info = JSON.parse(this.response);
    let i=0;
    details.innerHTML="";
    if(request.status>=200&&request.status<400)
    {
      info.forEach(element => {
        details.innerHTML+=`
        <div class="card">
          <p>Nombre manga: ${info[i].nombre}</p>
          <p>Descripcion: ${info[i].descripcion}</p>
          <p>Autor: ${info[i].autor}</p>
          <p>Cantidad: ${info[i].cantidad}</p>
          <p>Precio: ${info[i].precio}</p>
          <p>ISBN: ${info[i].isbn}</p>
        </div>`;
        i++;
      });
    }
  }
  request.send();
}



function buscar(){
  var request = new XMLHttpRequest();
  let s = document.getElementById("valorbuscar").value;
  if(s=="")
  {
    alert("Faltan datos");
  }
  else
  {
    btnBuscarN();
    request.open("GET","http://localhost:3000/Mangas",true);
      request.onload = function(){
        let details = document.getElementById("resultado");
        let info = JSON.parse(this.response);
        let i=0;
        info.forEach(element => {
          if(info[i].nombre==s||info[i].isbn==s)
          {
            details.innerHTML+=`
            <div class="card">
              <p>Nombre manga: ${info[i].nombre}</p>
              <p>Descripcion: ${info[i].descripcion}</p>
              <p>Autor: ${info[i].autor}</p>
              <p>Cantidad: ${info[i].cantidad}</p>
              <p>Precio: ${info[i].precio}</p>
              <p>ISBN: ${info[i].isbn}</p>
            </div>`;
          }
          i++;
        });
      }
    request.send();
  }
}



let temp;
function buscar2(){
  var request = new XMLHttpRequest();
  let s = document.getElementById("valorbuscar").value;
  console.log(s);
  if(s=="")
  {
    alert("Faltan datos");
  }
  else
  {
    request.open("GET","http://localhost:3000/Mangas",true);
    request.onload = function(){
        let details = document.getElementById("resultado");
        let info = JSON.parse(this.response);
        let i=0;
        let x=0;
        info.forEach(element => {
          if(info[i].nombre==s||info[i].isbn==s)
          {
            details.innerHTML=`
            <div id="mod">
              <h1>Modificar Información del manga</h1>
              <label for="nombre">Nombre del manga: </label>
              <input type="text" id="modnombre">
              <br>

              <label for="descripcion">Descripcion: </label>
              <input type="text" id="moddesc">
              <br>

              <label for="autor">Autor: </label>
              <input type="text" id="modautor">
              <br>

              <label for="cantidad">Cantidad: </label>
              <input type="text" id="modcantidad">
              <br>

              <label for="precio">Precio: </label>
              <input type="text" id="modprecio">
              <br>

              <label for="isbn">ISBN: </label>
              <input type="text" id="modisbn">
              <br>
              <button id="buscar" onclick="Modificar2(temp)">Modificar</button>
            </div>`;

            document.getElementById("modnombre").value=info[i].nombre;
            document.getElementById("moddesc").value=info[i].descripcion;
            document.getElementById("modautor").value=info[i].autor;
            document.getElementById("modcantidad").value=info[i].cantidad;
            document.getElementById("modprecio").value=info[i].precio;
            document.getElementById("modisbn").value=info[i].isbn;
            temp=info[i].id;
            x=1;
          }
          i++;
        });
        if(x==0)
        {
          alert("No se encontro el Manga");
        }
        else
        {

        }
      }
      request.send();
  }
}

function buscar3(){
  var request = new XMLHttpRequest();
  let s = document.getElementById("valorbuscar").value;
  console.log(s);
  if(s=="")
  {
    alert("Faltan datos");
  }
  else
  {
    request.open("GET","http://localhost:3000/Mangas",true);
    request.onload = function(){
    if(request.status>=200&&request.status<400)
    {
      let details = document.getElementById("resultado");
      let info = JSON.parse(this.response);
      let i=0;
      let x=0;
      info.forEach(element => {
          if(info[i].nombre==s||info[i].isbn==s)
          {
            temp=info[i].id;
            details.innerHTML=`
              <div id="mod">
                <h1>Borrar Manga</h1>

                <label for="id">Id: </label>
                <input type="text" id="deletid" disabled></label>
                <br>

                <label for="nombre">Nombre del manga: </label>
                <input type="text" id="deletnombre" disabled>
                <br>

                <label for="descripcion">Descripcion: </label>
                <input type="text" id="deletdesc" disabled>
                <br>

                <label for="autor">Autor: </label>
                <input type="text" id="deletautor" disabled>
                <br>

                <label for="cantidad">Cantidad: </label>
                <input type="text" id="deletcantidad" disabled>
                <br>

                <label for="precio">Precio: </label>
                <input type="text" id="deletprecio" disabled>
                <br>

                <label for="isbn">ISBN: </label>
                <input type="text" id="deletisbn" disabled>
                <br>
                <button id="buscar" onclick="Eliminar(temp)">Borrar</button>
              </div>`;
              
              document.getElementById("deletid").value=info[i].id;
              document.getElementById("deletnombre").value=info[i].nombre;
              document.getElementById("deletdesc").value=info[i].descripcion;
              document.getElementById("deletautor").value=info[i].autor;
              document.getElementById("deletcantidad").value=info[i].cantidad;
              document.getElementById("deletprecio").value=info[i].precio;
              document.getElementById("deletisbn").value=info[i].isbn;
              x=1;
          }
          i++;
        });
        if(x==0)
        {
          alert("No se encontro el Manga");
        }
        else
        {

        }
      }
    }
    request.send();
  }
}

function Eliminar(x){
  var request = new XMLHttpRequest();
  request.open("DELETE","http://localhost:3000/Almacen");
  request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  request.send("id="+x);
  cancelar();
}

function Modificar2(y){
  var xhr = new XMLHttpRequest();
  xhr.open("PUT","http://localhost:3000/Almacen",true);
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

  let name  = document.getElementById("modnombre").value;
  let description = document.getElementById("moddesc").value;
  let author = document.getElementById("modautor").value;
  let cant = document.getElementById("modcantidad").value;
  let price = document.getElementById("modprecio").value;
  let isbn = document.getElementById("modisbn").value;
  console.log(y);
  xhr.send("id="+y+"&nombre="+name+"&descripcion="+description+"&autor="+author+"&cantidad="+cant+"&precio="+price+"&isbn="+isbn);
  alert("Dato modificado correctamente");
  cancelar();
}