class Almacen {
  constructor(id,nombre, descripcion,autor,cantidad,precio, isbn) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.autor = autor;
    this.cantidad = cantidad;
    this.precio = precio;
    this.isbn = isbn;
  }
}

let Mangas = new Almacen();

Mangas =
[
  {
    "id": 0,
    "nombre": "Seraph of The End Tomo 1",
    "descripcion": "Un virus desconocido merma la humanidad y los niños son los únicos sobrevivientes. Yuichiro Hyakuya y sus amigos quedan atrapados en el mundo subterráneo de los vampiros, quienes ahora controlan el mundo. Yuichiro y los demás intentan escapar, sin embargo, solo él huye hasta la superficie, donde queda maravillado con el nuevo mundo que ahí se yergue.",
    "autor": "Takaya Kagami",
    "cantidad": 20,
    "precio": 99,
    "isbn": "978-607-528-711-9"
  },
  {
    "id": 1,
    "nombre": "Naruto Tomo 1",
    "descripcion": "La historia comienza en un discreto pueblo llamado Konoha. Ahí encontramos a un niño llamado Naruto, quien estudia en la Escuela Ninja y se divierte haciendo travesuras a sus compañeros. ¿Será posible que Naruto cumpla su gran sueño de convertirse en el sucesor hokage y supere la leyenda de sus antepasados? Aunque, en realidad, los origenes de este singular personaje siguen siendo un misterio.",
    "autor": "Masashi Kishimoto",
    "cantidad": 20,
    "precio": 69,
    "isbn": "Sin ISBN registrado."
  },
  {
    "id": 2,
    "nombre": "Your name. Tomo 2",
    "descripcion": 'Aun que alberga dudas al respecto, el correo de Mitshua dice "Sera divertido ver el cometa, ¿verdad?" mientras Taki fracasa en su cita con Okudera. Taki piensa que volvera a cambiar de inmediato, pero eso no sucedió...',
    "autor": "Makoto Shinkai",
    "cantidad": 20,
    "precio": 99,
    "isbn": "978-607-528-754-6"
  },
]

const express=require("express");
const cors=require("cors");
const bodyparser=require("body-parser");

const app=express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

app.use(function(req,res,next)
{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods','PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.listen(3000,()=>{
  console.log("Escuchando en el puerto 3000");
});

app.get("/Mangas",cors(),(req,res)=>{
  res.send(Mangas);
});

app.get("/Almacen/:id?",cors(), (req,res)=>{
  if(Mangas[req.params.id])
  {
    res.send(Mangas[req.params.id]);
  }
  else
  {
    res.send("No se encontro ningun manga con ese id");
  }
});

app.post("/Almacen",cors(),(req,res)=>
{
  const nuevotelefono = new Almacen(
    Mangas.length,
    req.body.nombre,
    req.body.descripcion,
    req.body.autor,
    req.body.cantidad,
    req.body.precio,
    req.body.isbn
    );
  Mangas.push(nuevotelefono);
  res.send();
});

app.put("/Almacen",cors(),(req,res)=>
{
    if (req.body.id == Mangas[req.body.id].id) {
      let temp = req.body.id;
      Mangas[req.body.id] = new Almacen(
        temp,
        req.body.nombre,
        req.body.descripcion,
        req.body.autor,
        req.body.cantidad,
        req.body.precio,
        req.body.isbn
      );
      res.send("Success");
    } 
    else
    {
      res.send("ERROR");
    }
});

app.delete("/Almacen",cors(),(req,res)=>
{
    if(req.body.id==Mangas[req.body.id].id)
    {
      Mangas.splice(req.body.id, 1);

      let j=0;
      for(let i=0;i<Mangas.length;i++)
      {
        Mangas[i].id=j;
        j++;
      }
      res.send("Manga borrado correctamente");
    }
    else
    {
      res.send({error:500})
    }
});
