const express=require("express");
const usuarioRutas=require("./rutas/rutasProductos");

const app=express("express")
//vamos a poner que vamos aceptar los datos del formulario ponemos
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use("/",usuarioRutas);

const port=process.env.PORT||3000;
app.listen(3000,()=>{
//console.log(port);
    console.log("eh https://localhost"+port);
})
