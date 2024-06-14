package main

import "fmt"

func main() {
	fruit := "🥝"
	var p *string                                                           // <<- la variable p almacenara el espacio en memoria de un tipo de daro string
	p = &fruit                                                              // <-- a "p" se asignar la direccion en memoria de vaaribale "fruit"
	*p = "🍍"                                                                // para modificar el valor de la variable fruta desde el puntero.
	fmt.Printf("Tipo: %T, valor: %s, Dirección: %v", fruit, fruit, &fruit)  // Tipo: string, valor: 🥝, Dirección: 0xc000014060
	fmt.Printf("\nTipo: %T, Valor: %v, Desreferenciación: %s \n", p, p, *p) //  Tipo: *string, Valor: 0xc000014060, Desreferenciación: 🥝
	// Operador de referenciacion o indirección: Para ver el valor que esta almacenado en esa variable, es decir para ver el emogi de la manzana
}
