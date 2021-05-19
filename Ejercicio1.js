/*
1. Calcula los impuestos
Escribe una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos.
Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. 
De lo contrario retorna 0.
*/
function calcularImpuestos(edad, ingresos){
	var edad = prompt("Ingresar edad")
  edad = Number(edad)
  var ingresos = prompt("Ingresar su ingreso")
  ingresos = Number(ingresos)

	console.log(`Su edad es ${edad} años con un ingreso de ${ingresos}`)
	if(edad>=18 && ingresos>=1000){
		return ingresos*0.40
	}else{
		return 0
	}
}
calcularImpuestos()
