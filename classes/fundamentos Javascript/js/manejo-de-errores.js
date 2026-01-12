// console.log(saludo);
// const nombre = "Christhian";
// nombre = "Chris";
// console.log("Hola mundo");

// try {
//   // console.log(saludo);
//   const nombre = "Christhian";
//   // nombre = "Chris";
// } catch {
//   console.error("Error");
//   console.log("hOLA AQUI ES UN ERROR");
//   // console.log(typeof error);
//   // console.log(error);
//   // console.log(error.message);
//   // console.log(error.name);
//   // console.log(error.stack);
// }

// console.log("Hola");

// //Tipos de errores
// // SyntaxError -> Error de sintaxis
// // ReferenceError -> Error de referencia
// // TypeError -> Error de tipo
// // Crear nuestros errores
// function saludar(nombre) {
//   try {
//     if (nombre === undefined) {
//       throw new TypeError("parametro nombre no enviado");
//       // console.log("entroo");
//     }
//     console.log("Hola " + nombre);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// saludar();

// const error1 = new Error("Error");
// const error2 = new SyntaxError("Error de sintaxis");
// const error3 = new ReferenceError("Error de referencia");
// const error4 = new TypeError("Error de tipos");

// console.log(error4);

// try {
//   // console.log(saludo);
//   console.log("saludo");
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("Siempre se ejecuta");
// }

// function realizarTrabajo() {
//   try {
//     console.log("Empezar trabajo peligroso");

//     // Imagina que algo sale mal
//     throw new Error("¡Se cortó el cable incorrecto!");
//   } catch (error) {
//     console.log("Manejo el error:", error.message);
//   }
//   console.log("Finalizar trabajo peligroso");
// }

// realizarTrabajo();

// function realizarTrabajo() {
//   try {
//     console.log("Empezar trabajo peligroso");

//     // Un error inesperado
//     throw new Error("Error catastrófico");
//   } catch (error) {
//     if (error.message === "¡Se cortó el cable incorrecto!") {
//       console.log("Manejo el error:", error.message);
//     } else {
//       throw error;
//     }
//   } finally {
//     console.log("Finalizar trabajo peligroso!!");
//   }
// }

// realizarTrabajo();

// function realizarTrabajo() {
//   try {
//     console.log("Empezar trabajo peligroso");

//     // retorno explicito
//     return "Material radioactivo encontrado";
//   } catch (error) {
//     console.log("Manejo el error:", error.message);
//   } finally {
//     console.log("Finalizar trabajo peligroso !!! ");
//   }
// }

// console.log(realizarTrabajo());
// realizarTrabajo();

// Expresiones regulares
const texto = "Hola mundo";
const regExp = /hola/i;
console.log(regExp.test(texto));

//Es un numero
const regExp1 = /^\d+$/;
console.log(regExp1.test("1234567"));
console.log(regExp1.test("123a567"));

// Enontrar vocales
const texto1 = "HolA Codeable";
const regExp2 = /[aeiou]/gi;
console.log(texto1.match(regExp2));

// Reemplazar palabras
const texto3 = "Me gusta el cafe";
const regExp3 = /[aeiou]/g;
console.log(texto3.replace(regExp3, "a"));

// Empieza por la ...
const saludo = "Juan Hola Mundo";
const regExp4 = /^hola/i;
console.log(regExp4.test(saludo));

// Termina con
const texto4 = "Muchas gracias";
const texto5 = "De Nada";
const regExp5 = /gracias$/;
const regExp6 = /nada$/i;
console.log(regExp5.test(texto4));
console.log(regExp6.test(texto5));

// Encontrar telefonos
const telefonos = "Llama al 555-1234 o al 555-5678";
const regExp7 = /\d{3}-\d{4}/g;
console.log(telefonos.match(regExp7));

// Usuario: solo letras y números, 3-10 caracteres
function validarUsuario(usuario) {
  const regExp = /^[a-zA-Z0-9]{3,10}$/;
  return regExp.test(usuario);
}

console.log(validarUsuario("123ana"));
console.log(validarUsuario("ana_1235"));
console.log(validarUsuario("a1"));

// Validar si es un email simple
const regExp8 = /^\w+@\w+\.\w+$/;
const correo = "christhian2524@gmail.com";
console.log(regExp8.test(correo));
