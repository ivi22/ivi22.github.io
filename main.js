// Pre entrega Ramires Ivana
// como encontrar mi trabajo ideal

let crearUsuario = prompt("ingrese su nombre completo");
let crearpassword = prompt("ingrese una contraseña");
let edad = parseInt(prompt("ingrese su edad: (debe ser mayor de 18)"));

if (edad < 18) 
{
  alert("Lo siento, intentelo de nuevo cuando sea mayor de edad");
} 
else if (edad >= 18);
{
  alert("Genial!! ahora puede iniciar secion!");
  
  let usuarioIngresado = prompt("ingrese su nombre completo");
  let paswordIngresado = prompt("ingrese una contraseña");
  
  if (usuarioIngresado === crearUsuario && paswordIngresado === crearpassword) 
  {
    alert("Bienvenido/a" + usuarioIngresado);
  } 
  else 
  {
    alert("UPS! algo salio mal, vualva a intentarlo");
  }
}