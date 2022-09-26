
let nombre = prompt ('Ingresá tu nombre.')

let cantidad =  prompt ('Bienvenido ' + nombre + ', ingresa la cantidad de calificaciones que vas a ingresar para sacar tu promedio')
let suma = 0 
let nota = 0 

for ( let i = 1 ; i <= cantidad ; i++ ){
let nota = parseInt(prompt ('Ingresá la nota'))
suma = suma+nota

}
let promedio= suma/cantidad;
if (promedio >= 7){
alert(nombre + ' Felicitaciones, tu promedio supera el minimo requerido para aprobar, tu nota promedio final es de ' + promedio)
}
else{
    alert(nombre + ' Lamentamos informarte que tu promedio es de ' + promedio + ' y no supera el minimo requerido para aprobar')
}

