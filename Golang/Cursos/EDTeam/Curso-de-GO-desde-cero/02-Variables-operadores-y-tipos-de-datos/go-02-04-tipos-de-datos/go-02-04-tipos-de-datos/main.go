package main

import "fmt"

func main() {

	//var a rune = 'a' // tambieb -100 podemos pasarle
	// Nota: 'rune' es un alias de int32, pero si es un string(comillas simple) numerico representa un codigo unicoden
	//fmt.Printf("Tipo: %T, valor: %v", a, a)
	//fmt.Println("\n")

	// var f float32 = 32.56
	// fmt.Printf("Tipo: %T, valor: %v", f, f)

	var sum1 uint8 = 100
	var sum2 uint16 = 23000
	//c := sum1 + sum2 // invalid operation: sum1 + sum2 (mismatched types uint8 and uint16)
	// Nota: No se puede la operacion por tipos de datos
	c := uint16(sum1) + sum2
	fmt.Printf("Tipo %T, Valor: %v", c, c) // ipo uint16, Valor: 23100

	println("Identificador Blanc")
	_ = 234 // No puedo utilizar los dos puntos, porque le digo a Go que estoy declarando y asignando.
	var _ string = "test"
	println("=============== \n")

	var a string
	fmt.Println("%q", a)
	
}
