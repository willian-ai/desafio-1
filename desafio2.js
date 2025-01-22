// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo(){
    console.log("¡Hola, mundo!")
}
// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludar(nombre){
    console.log(`¡Hola, ${nombre} bienvenido!`)

}
// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleNumero(numero){
    return numero * 2
    
}
// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedioDeTresNumeros(num1, num2, num3){
    return (num1 + num2 + num3) / 3

}
// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayorDeDosNumeros(num1, num2){
   return num1 > num2 ? `El numero ${num1} es mayor` : `El numero ${num2} es mayor` 
}
// 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function multiplicacionDeUnNumero(numero){
    return numero * numero

}
