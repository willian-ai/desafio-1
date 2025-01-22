// 2. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".

let contenido = document.querySelector('h1');
contenido.innerHTML = "Hora del Desafío";


// 3. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function consoleInfo(){
    let click = document.querySelector(".button");
    click.innerHTML = "El botón fue clicado";
    let show = click.innerHTML;
    console.log(show)
}

// 4. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function preguntaCiudad(){
    let ciudad = prompt("Escribe el nombre de una ciudad de Brasil.")
    alert(`Estuve en ${ciudad} y me acordé de ti`)
}

// 5. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function lenguajePreferido(){
    alert("Yo amo JS")
}

// 6. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

function suma(){
    primerNumero = parseFloat(prompt("Digite el primer numero: "));
    segundoNumero = parseFloat(prompt("Digite el segundo numero: "));
    resultado = primerNumero + segundoNumero;
    alert(`El resultado de la suma entre ${primerNumero} y ${segundoNumero} es ${resultado}`)
}